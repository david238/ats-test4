const initialState = {
    csvarray: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'displayfirstline') {
        // console.log('displayfirstline called', {
        //     oldState: state,
        //     newArray: action.value,
        // });

        return {
            csvarray: action.value
        }
      
    }
    return state;
};

export default reducer;