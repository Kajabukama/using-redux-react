import React from 'react';
import CakeScreen from './components/cake/cake.screen';
import CakeContainer from './components/cake/CakeContainer';
import IcecreamScreen from './components/icecream/icecream.screen';
import './theme.css';

function App() {
  return (
    <div className="App">
      <CakeScreen/>
      <hr/>
      <CakeContainer/>
      <hr/>
      <IcecreamScreen/>
    </div>
  );
}

export default App;
