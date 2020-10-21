import React from 'react';
import {  connect } from 'react-redux'
import { buyIcecream } from '../../redux';

const IcecreamScreen = (props) => {
  return (
    <div>
      <h1>Number of Icecream - { props.numberOfIcecream } </h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numberOfIcecream: state.icecream.numberOfIcecream
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIcecream: () => dispatch(buyIcecream())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IcecreamScreen)
