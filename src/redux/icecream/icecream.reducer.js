import { BUY_ICECREAM, RETURN_ICECREAM } from './icecream.types';

const initialState = {
  numberOfIcecream: 80
}

const icecreamReducer = (state = initialState, action) => {

  switch(action.type){
    case BUY_ICECREAM: return {
      numberOfIcecream: state.numberOfIcecream - 1
    }

    case RETURN_ICECREAM: return {
      numberOfIcecream: state.numberOfIcecream + 1
    }
    default: return state
  }

}

export default icecreamReducer;