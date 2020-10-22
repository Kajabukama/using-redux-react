import React, { useState } from 'react';
import { connect } from 'react-redux'
import { buyCake, returnCake } from './../../redux'

const CakeScreen = (props) => {
  
  const [quantity, setQuantity] = useState(5);

  return (
    <div>
      <h2>Number of Cakes - { props.numberOfCakes }</h2>
      <input 
        type="text" 
        placeholder="Enter quantity"
        name="quantity" 
        value={quantity} 
        onChange={ (ev) => setQuantity(ev.target.value) }
      />
      <button onClick={ () => props.buyCake(quantity) }>Buy Cakes</button>
      <button onClick={ () => props.returnCake(quantity) }>Return Cakes</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (quantity) => dispatch(buyCake(quantity)),
    returnCake: (quantity) => dispatch(returnCake(quantity)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeScreen)
