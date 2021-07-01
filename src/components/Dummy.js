import React from "react";
import { connect } from "react-redux";
import { INCR_COUNTER1, INCR_COUNTER2 } from '../Redux/actions/actions'


const Dummy = () => {
  return <div>I'm Dummy</div>;
};

// export default Dummy;



function mapStateToProps(state)
{
  console.log(state);
  return  {
          // counter1 : state.counter1.counter1,
          // counter2 : state.counter2.counter2
          }

}

export default connect(mapStateToProps, { incCounter1: INCR_COUNTER1,
  incCounter2: INCR_COUNTER2
})(Dummy);
