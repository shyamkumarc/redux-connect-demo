import { useContext } from "react";
import { connect } from "react-redux";

const OutputComp = (props) =>{
return(<div>
    <h1>Product Component</h1>
    <h2>The product is : {props.counter1}</h2>
</div>)
}

const mapStateToProps = (state) =>{
    return {
        counter1 : state.counter1,
        counter2 :state.counter2
    }
}

export default connect(mapStateToProps)(OutputComp);