import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { filter, Observable, of, switchMap } from 'rxjs';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProductActions } from '../state/actions/actions';
import { selectAllProducts } from '../state/selectors/selectors';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Product } from '../models/store.models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [NgIf, NgFor, MatIconModule, AsyncPipe],
  standalone: true,
})
export class ProductsComponent implements OnInit {
  public products$!: Observable<(Product | undefined)[]>;

  constructor(
    private _store: Store<{ products: Product[] }>,
    private _dialog: MatDialog
  ) {
    this.products$ = _store.select(selectAllProducts);
  }

  public ngOnInit(): void {
    this.getAllProducts();
  }

  public editProduct(product: Product): void {
    const dialogRef = this._dialog.open(AddEditProductComponent, {
      data: product,
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap((result: Product) =>
          of(
            this._store.dispatch(
              ProductActions.editProduct({ product: result })
            )
          )
        )
      )
      .subscribe();
  }

  public deleteProduct(id: number): void {
    this._store.dispatch(ProductActions.deleteProduct({ productId: id }));
  }

  public addProduct(): void {
    const dialogRef = this._dialog.open(AddEditProductComponent);
    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap((result: Product) =>
          of(
            this._store.dispatch(ProductActions.addProduct({ product: result }))
          )
        )
      )
      .subscribe();
  }

  public getAllProducts(): void {
    this._store.dispatch(ProductActions.getProductList());
  }
}
