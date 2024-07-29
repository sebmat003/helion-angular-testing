import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './../actions/actions';
import { Product } from '../../models/store.models';

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();
export const initialState: EntityState<Product> = adapter.getInitialState([]);

export const productsReducer = createReducer(
  initialState,
  on(ProductActions.productListLoadSuccessfully, (state, { products }) =>
    adapter.setAll(products, state)
  ),
  on(ProductActions.addProduct, (state, { product }) =>
    adapter.addOne(product, state)
  ),
  on(ProductActions.deleteProduct, (state, { productId }) =>
    adapter.removeOne(productId, state)
  ),
  on(ProductActions.editProduct, (state, { product }) =>
    adapter.updateOne({ id: product.id, changes: product }, state)
  )
);
