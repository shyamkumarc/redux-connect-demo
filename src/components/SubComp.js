import Dummy from "./Dummy";
import React from 'react';


const SubComp = (props) =>{

return(<> 
<h1>I'm the sub component diplaying counter 2 : {props.value}</h1>
<Dummy/>
</>)
}

export default SubComp;