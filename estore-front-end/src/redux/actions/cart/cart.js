import * as actionTypes from "./types";


export const addCartItem = (data) => async (dispatch) => {
    dispatch({
        type: actionTypes.ADD_CART_ITEM,
        data
    })
}