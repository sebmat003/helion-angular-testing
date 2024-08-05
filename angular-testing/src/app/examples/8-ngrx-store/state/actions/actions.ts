import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../../models/store.models';

export const ProductActions = createActionGroup({
  source: 'Product',
  events: {
    'Add Product': props<{ product: Product }>(),
    'Edit Product': props<{ product: Product }>(),
    'Delete Product': props<{ productId: number }>(),
    'Get Product List': emptyProps(),
    'Get Product List Success': props<{ products: Product[] }>(),
    'Get Product List Error': props<{ error: any }>(),
  },
});
