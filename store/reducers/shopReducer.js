const initialState = {
    shops: [],
    loading: true
};

const shopReducer = (state=initialState, action) => {
    switch (action.type){
        case "FETCH_SHOPS":
            return {
                ...state,
                shops: action.payload.shops, 
                loading: false
            };
        default: return state;
    };
};

export default shopReducer;