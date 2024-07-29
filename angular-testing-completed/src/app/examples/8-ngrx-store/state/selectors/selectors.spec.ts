import { EntityState } from '@ngrx/entity';
import { convertArrayToEntityState } from '../../../9-utils/utils';
import { Product } from '../../models/store.models';
import { selectAllProducts } from './selectors';
import { mockProducts } from '../../testing/product-testing.data';

describe('Product selectors', () => {
  let productEntityState: EntityState<Product>;

  beforeAll(() => {
    productEntityState = {
      ...convertArrayToEntityState(mockProducts),
    };
  });

  it('should select all products', () => {
    const result = selectAllProducts.projector(productEntityState);
    
    expect(result).toEqual(mockProducts);
  });
});
