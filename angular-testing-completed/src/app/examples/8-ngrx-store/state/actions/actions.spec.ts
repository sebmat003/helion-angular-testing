import { mockProduct, mockProducts } from '../../testing/product-testing.data';
import { ProductActions } from './actions';

describe('ProductActions', () => {
  it('should create Add Product action', () => {
    const action = ProductActions.addProduct({ product: mockProduct });

    expect(action).toEqual({
      type: '[Product] Add Product',
      product: mockProduct,
    });
  });

  it('should create Edit Product action', () => {
    const action = ProductActions.editProduct({ product: mockProduct });

    expect(action).toEqual({
      type: '[Product] Edit Product',
      product: mockProduct,
    });
  });

  it('should create Delete Product action', () => {
    const productId = 1;
    const action = ProductActions.deleteProduct({ productId });

    expect(action).toEqual({
      type: '[Product] Delete Product',
      productId,
    });
  });

  it('should create Get Product List action', () => {
    const action = ProductActions.getProductList();

    expect(action).toEqual({
      type: '[Product] Get Product List',
    });
  });

  it('should create Get Product List Success action', () => {
    const action = ProductActions.getProductListSuccess({
      products: mockProducts,
    });

    expect(action).toEqual({
      type: '[Product] Get Product List Success',
      products: mockProducts,
    });
  });

  it('should create Get Product List Error action', () => {
    const error = { message: 'Error fetching product list' };
    const action = ProductActions.getProductListError({ error });

    expect(action).toEqual({
      type: '[Product] Get Product List Error',
      error,
    });
  });
});
