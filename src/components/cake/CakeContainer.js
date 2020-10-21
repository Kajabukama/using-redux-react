import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from './../../redux/cake/cake.actions'
 
const CakeContainer = () => {

  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cakes in Stock { numberOfCakes }</h1>
      <button onClick={() => dispatch(buyCake()) }>Sell Cake</button>
    </div>
  )
}

export default CakeContainer
