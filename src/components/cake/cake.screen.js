import React from 'react';
import { connect } from 'react-redux'
import { buyCake, returnCake } from './../../redux'

const CakeScreen = (props) => {
  return (
    <div>
      <h2>Number of Cakes - { props.numberOfCakes }</h2>
      <button onClick={ props.buyCake }>Buy Cakes</button>
      <button onClick={ props.returnCake }>Return Cakes</button>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    returnCake: () => dispatch(returnCake()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeScreen)
