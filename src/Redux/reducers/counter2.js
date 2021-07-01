let initState = {
    counter2 : 0
}

 const increment = (state  = initState, action)=>
{

    switch (action.type) {
        case 'INCR_COUNTER2':
            return {...state, counter2:++state.counter2};
            case 'INCR_COUNTER2_CUST':
            return {...state, counter2:state.counter2+=action.payload.factor};    
            case 'PROD_COUNTER2':
                return {...state, counter2:state.counter2*action.payload.factor};   
        default:
            return state
    }
}

export default  increment