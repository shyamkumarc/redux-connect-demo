import React from "react";
import ProductComponent from './productComponent'
import SumComponent from './sumComponent'
import InputComponent from './InputComp'
import Dummy from "./Dummy";


const App = (props) => {
  return(<div>
    <InputComponent/>
    {/* <ProductComponent/> */}

    <SumComponent/>
    <Dummy/>
      </div>);
}

export default App;
