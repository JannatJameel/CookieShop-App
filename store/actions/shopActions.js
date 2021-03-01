import instance from "./instance";
import * as types from "./types";

export const fetchShops = () => {
    return async (dispatch) => {
        try {
            const res = await instance.get("/shops");
            dispatch({
                type: types.FETCH_SHOPS, 
                payload: {shops: res.data}
            });
        } catch (error) {
            console.log("error:", error);
        }
    }
};