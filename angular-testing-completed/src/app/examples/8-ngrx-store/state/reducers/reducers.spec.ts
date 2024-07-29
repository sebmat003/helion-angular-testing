import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as ProductActions from './../actions/actions';
import { Product } from '../../models/store.models';
import { convertArrayToEntityState } from '../../../9-utils/utils';
import { productsReducer } from './reducers';
import { mockProducts } from '../../testing/product-testing.data';

describe('Product reducer', () => {
  const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();
  const initialState: EntityState<Product> = adapter.getInitialState([]);
  const productEntityState: EntityState<Product> = {
    ...convertArrayToEntityState(mockProducts),
  };

  it('should set all products', () => {
    const action = ProductActions.productListLoadSuccessfully({
      products: [...mockProducts],
    });
    const expectedState: EntityState<Product> = { ...productEntityState };

    const result = productsReducer(initialState, action);

    expect(result).toEqual(expectedState);
  });

  it('should add product', () => {
    const newProduct: Product = {
      id: 3,
      name: 'name3',
      price: 300,
      thumbnail: 'test3.jpg',
    };
    const updatedProducts = [...mockProducts, newProduct];

    const action = ProductActions.addProduct({ product: { ...newProduct } });

    const expectedState: EntityState<Product> = {
      ...convertArrayToEntityState(updatedProducts),
    };
    const result = productsReducer(productEntityState, action);
    expect(result).toEqual(expectedState);
  });

  it('should delete product', () => {
    const product: Product = {
      id: 3,
      name: 'name3',
      price: 300,
      thumbnail: 'test3.jpg',
    };
    const initialProducts = [...mockProducts, product];

    const action = ProductActions.deleteProduct({ productId: product.id });

    const initialState: EntityState<Product> = {
      ...convertArrayToEntityState(initialProducts),
    };
    const result = productsReducer(initialState, action);
    expect(result).toEqual(productEntityState);
  });

  it('should edit product', () => {
    const editedProduct = {
      ...mockProducts[0],
      name: 'updated',
    };
    const action = ProductActions.editProduct({
      product: { ...editedProduct },
    });

    const result = productsReducer(productEntityState, action);

    const expectedProducts = [editedProduct, mockProducts[1]];
    const expectedState = {
      ...convertArrayToEntityState(expectedProducts),
    };
    expect(result).toEqual(expectedState);
  });
});
