const initialState = {
    products: [],
    loading: true
};

const productReducer = (state=initialState, action) => {
    switch (action.type){
        case "FETCH_PRODUCTS":
            return {
                ...state,
                products: action.payload.products, 
                loading: false
            };
        default: return state;
    };
};

export default productReducer;