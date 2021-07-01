export const INCR_COUNTER1 = () => {
 return {
     type: 'INCR_COUNTER1'
 }
};

export const INCR_COUNTER1_CUST = (factor) => {
    return {
        type: 'INCR_COUNTER1_CUST',
        payload: {factor: factor}
    }
   };


   export const PROD_COUNTER1 = (factor) => {
    return {
        type: 'PROD_COUNTER1',
        payload: {factor: factor}
    }
   };


   export const INCR_COUNTER2 = () => {
    return {
        type: 'INCR_COUNTER2'
    }
   };
   
   export const INCR_COUNTER2_CUST = (factor) => {
       return {
           type: 'INCR_COUNTER2_CUST',
           payload: {factor: factor}
       }
      };
   
   
      export const PROD_COUNTER2 = (factor) => {
       return {
           type: 'PROD_COUNTER2',
           payload: {factor: factor}
       }
      };