import { BUY_CAKE, RETURN_CAKE } from './cake.types'

export const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'Buy cake action'
  }
}

export const returnCake = () => {
  return {
    type: RETURN_CAKE,
    info: 'Return a cake'
  }
}