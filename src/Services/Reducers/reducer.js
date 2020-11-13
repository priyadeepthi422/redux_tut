import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";
const initialState = {
    cartData: [],
};

export default function cartItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cardData: action.data,
            }
            break;
        default:
            return state;
    }
}