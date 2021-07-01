import { react, useState, useEffect, useMemo, useContext } from "react";
import SubComp from './SubComp';
import { connect } from "react-redux";
import { INCR_COUNTER1, INCR_COUNTER2 } from '../Redux/actions/actions'


const InputComp = (props) => {

  const onValueChange = (e) => {
      props.incCounter1();
    // setInputValue((old) => {
    //   context.dispatch({type:'increment', payload:2});
    //   return { ...old, value: e.target.value };     
    // });
  };
  const onValueChangeDummy = (e) => {
    props.incCounter2();
    // setDummyValue((old) => {
    //   context.dispatch({type:'product', payload:2});
    //   return { ...old, dummy: e.target.value };
    // });
  };

  let loadSubComp = useMemo(
    () =>{
      return <SubComp value={props.counter2} />},
    [props.counter2]
  );

  useEffect(() => {
    console.log("use effect of 'input' is called");
  }, [props.counter1]);

  return (
    <div>
      <input
        label="input"
        value={props.counter1}
        onChange={(e) => {
          onValueChange(e);
        }}
      />
      <input
        label="dummy"
        value={props.counter2}
        onChange={(e) => {
          onValueChangeDummy(e);
        }}
      />
      <h1>{`hello from 1st input : ${props.counter1}`}</h1>
      <h1>{`hello from 2nd Input : ${props.counter2}`}</h1>
      {loadSubComp}
      {/* <SubComp value={props.counter2} /> */}
    </div>
  );
};

function mapStateToProps(state)
{
  console.log(state);
  return  {counter1 : state.counter1.counter1, counter2 : state.counter2.counter2}

}

export default connect(mapStateToProps, { incCounter1: INCR_COUNTER1,
  incCounter2: INCR_COUNTER2
})(InputComp);
