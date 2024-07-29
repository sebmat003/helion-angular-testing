import { ActionCreator } from '@ngrx/store';
import { mockProduct, mockProducts } from '../../testing/product-testing.data';
import * as ProductActions from './actions';

describe('ProductActions', () => {
  it.each<[ActionCreator, any, any?]>([
    [ProductActions.addProduct, mockProduct, 'product'],
    [ProductActions.editProduct, mockProduct, 'product'],
    [ProductActions.deleteProduct, 123, 'productId'],
    [ProductActions.getProductList, undefined],
    [ProductActions.productListLoadSuccessfully, mockProducts, 'products'],
    [ProductActions.productListLoadFailure, 'Error occured', 'error'],
  ])('should create an action', (action, payload: unknown, propName = '') => {
    const props = { [propName]: payload };
    const expectedAction = {
      type: action.type,
      ...props,
    };

    expect(action(props as any)).toEqual(expectedAction);
  });
});
