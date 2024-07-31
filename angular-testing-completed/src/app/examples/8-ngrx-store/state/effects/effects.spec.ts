import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jest-marbles';
import { Observable, of } from 'rxjs';
import { ProductEffects } from './effects';
import { ProductsService } from '../services/product.service';
import { ProductActions } from '../actions/actions';

describe('Product Effects', () => {
  let effects: ProductEffects;
  let actions: Observable<any>;
  const mockProductsService = {
    getAllProducts: () => {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ProductEffects,
        { provide: ProductsService, useValue: mockProductsService },
        provideMockActions(() => actions),
      ],
    });

    effects = TestBed.inject(ProductEffects);
  });

  it('should load product list successfully', () => {
    mockProductsService.getAllProducts = () => of([]);
    const action = ProductActions.getProductList();
    const completion = ProductActions.getProductListSuccess({
      products: [],
    });

    actions = hot('-a', { a: action });
    const expected = cold('-b', { b: completion });

    expect(effects.loadProducts$).toBeObservable(expected);
  });

  it('should fail loading product list', () => {
    const action = ProductActions.getProductList();
    const error = new Error();
    const failure = ProductActions.getProductListError({ error });
    const errorResponse = cold('-#', {}, error);
    mockProductsService.getAllProducts = jest.fn(() => errorResponse);

    actions = hot('-a', { a: action });
    const expected = cold('--b', { b: failure });

    expect(effects.loadProducts$).toBeObservable(expected);
  });
});
