import instance from "./instance";
import * as types from "./types";

export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const res = await instance.get("/products");
            dispatch({
                type: types.FETCH_PRODUCTS, 
                payload: {products: res.data}
            });
        } catch (error) {
            console.log("error:", error);
        }
    }
};