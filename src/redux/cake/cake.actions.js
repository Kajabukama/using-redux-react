import { BUY_CAKE, RETURN_CAKE } from './cake.types'

export const buyCake = (quantity) => {
  return {
    type: BUY_CAKE,
    info: 'Buy cake action',
    payload: quantity
  }
}

export const returnCake = (quantity) => {
  return {
    type: RETURN_CAKE,
    info: 'Return a cake',
    payload: quantity
  }
}