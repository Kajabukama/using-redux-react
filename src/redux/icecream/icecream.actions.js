import { BUY_ICECREAM, RETURN_ICECREAM } from './icecream.types';

export const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
    info: 'Action to buy an icecream'
  }
}

export const returnIcecream = () => {
  return {
    type: RETURN_ICECREAM,
    info: 'Action to return an Icecream'
  }
}