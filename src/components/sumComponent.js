import { useContext, useMemo } from "react";
import { connect } from "react-redux";



const OutputComp = (props) =>{


return(<div>
    <h1>Sum Component</h1>
    <h2>The sum component is(counter2) : {props.counter2}</h2> 
    </div>)
}

const mapStateToProps = (state) =>{
    return {
        // counter1 : state.counter1.counter1 ,
        counter2 : state.counter2.counter2}
    
    
}

export default connect(mapStateToProps)(OutputComp);

// export default OutputComp;