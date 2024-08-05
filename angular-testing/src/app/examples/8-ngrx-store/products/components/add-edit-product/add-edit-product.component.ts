import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { PRODUCT_THUMBNAILS } from '../../product-thumbnails.const';
import { Product } from '../../../models/store.models';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

interface ProductForm {
  name: FormControl<string>;
  price: FormControl<number>;
  thumbnail: FormControl<string>;
}

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    NgFor,
    MatButtonModule,
  ],
  standalone: true,
})
export class AddEditProductComponent implements OnInit {
  public thumbnails = [...PRODUCT_THUMBNAILS];
  public form = new FormGroup<ProductForm>({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    price: new FormControl(0, {
      validators: [
        Validators.required,
        Validators.min(1),
        Validators.max(1000),
      ],
      nonNullable: true,
    }),
    thumbnail: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private _dialog: MatDialogRef<AddEditProductComponent>
  ) {}

  public ngOnInit(): void {
    if (this.data) {
      this.setForm();
    }
  }

  public setForm(): void {
    this.form.patchValue({ ...this.data });
  }

  public save(): void {
    const product: Product = {
      id: this.data ? this.data.id : Math.random() * 1000 + 1,
      ...this.form.getRawValue(),
    };
    this._dialog.close(product);
  }
}
