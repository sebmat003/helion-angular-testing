import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/store.models';

export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
);

export const editProduct = createAction(
  '[Product] Edit Product',
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ productId: number }>()
);

export const getProductList = createAction(
  '[Product] Get Product List'
);

export const productListLoadSuccessfully = createAction(
  '[Product] Product List Success',
  props<{ products: Product[] }>()
);

export const productListLoadFailure = createAction(
  '[Product] Product List Error',
  props<{ error: any }>()
);
