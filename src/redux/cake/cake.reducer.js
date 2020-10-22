import { BUY_CAKE, RETURN_CAKE } from './cake.types'
const initialState = {
  numberOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch(action.type){
    case BUY_CAKE: return {
      ...state,
      numberOfCakes: state.numberOfCakes - action.payload
    }

    case RETURN_CAKE: return {
      ...state,
      numberOfCakes: state.numberOfCakes + Number.parseInt(action.payload)
    }
    default: return state
  }
}

export default cakeReducer;