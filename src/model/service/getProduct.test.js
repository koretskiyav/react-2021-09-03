import {getProductByIdService} from './getProduct';
import { restaurants } from '../../fixtures';

const product = restaurants[0].menu[0];

describe('Product finder', ()=>{
  it('should find product', () => {
    let foundProduct = getProductByIdService(product.id);
    expect(foundProduct.id).toBe(product.id);
  });
  it('should return empty product', () => {
    const id= 'product-that-not-exists';
    let foundProduct = getProductByIdService(id);
    expect(foundProduct.id).toBe(undefined);
  });
});
