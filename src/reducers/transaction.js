const initialState = {
    userName: "Janny",
    totalAmount: 2500701,
}

export const transactionReducer = (state = initialState, action) => {
    switch(action.type){
        case '10000': 
            return {
                userName: "Janny",
                totalAmount:state.totalAmount - 10000};
        case '5000': 
            return {
                userName: "Janny",
                totalAmount:state.totalAmount - 5000};
        case 'empty':
            return {
                userName: "Janny",
                totalAmount:state.totalAmount-state.totalAmount}
        default:
            return state;
    }
};