let initState = {
    counter1 : 0
}

const increment = (state = initState , action) =>
{

    switch (action.type) {
        case 'INCR_COUNTER1':
            return {...state, counter1:++state.counter1};
            case 'INCR_COUNTER1_CUST':
            return {...state, counter1:state.counter1+=action.payload.factor};    
            case 'PROD_COUNTER1':
                return {...state, counter1:state.counter1*action.payload.factor};    
        default:
            return state
    }
}

export default increment