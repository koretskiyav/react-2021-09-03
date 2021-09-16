import {restaurants} from '../../fixtures';

export function getProductByIdService(id) {
  let product = {};
  restaurants.map((restaurant) =>{
    restaurant.menu.map((menu)=>{
      if(menu.id === id){
        product = {...menu};
      }
    })
  })
  return product;
}
