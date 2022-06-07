import React from "react";
import './App.css';
import Checkout from './components/Pages/Checkout/Checkout';

function App() {
  console.log("in the app component")
  return (
    <div className="App">
     <Checkout/>   
    </div>
  );
}

export default App;
