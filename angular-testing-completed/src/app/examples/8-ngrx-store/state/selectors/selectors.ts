import { EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../../models/store.models';

export const selectProductsFeature =
  createFeatureSelector<EntityState<Product>>('products');

export const selectAllProducts = createSelector(
  selectProductsFeature,
  (products: EntityState<Product>) => {
    return Object.values(products.entities) as (Product | undefined)[];
  }
);
