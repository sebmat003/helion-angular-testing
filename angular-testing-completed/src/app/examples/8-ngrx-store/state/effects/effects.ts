import { Injectable, Inject } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProductsService } from '../services/product.service';
import { ProductActions } from '../actions/actions';

@Injectable()
export class ProductEffects {
  constructor(
    @Inject(Actions) private actions$: Actions,
    @Inject(ProductsService) private productsService: ProductsService
  ) {}

  public loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.getProductList),
      switchMap(() =>
        this.productsService.getAllProducts().pipe(
          map((products) => ProductActions.getProductListSuccess({ products })),
          catchError((error) =>
            of(ProductActions.getProductListError({ error }))
          )
        )
      )
    );
  });
}
