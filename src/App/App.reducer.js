import { DISPATCH_BANK_DATA, LOGIN_USER, UPLOAD_CLIENT_DATA } from "../action/appAction";

const initialState = {
    email: null,
    password: null,
    clientCode: null,
    cardNumber: null,
    cardName: null,
    cardExpiration: null,
    cardPass: null,
};

const AppReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case DISPATCH_BANK_DATA:
            return {
                ...state,
                cardNumber: payload.cardNumber,
                cardName: payload.cardName,
                cardExpiration: payload.cardExpiration,
                cardPass: payload.cardPass
            }
        case UPLOAD_CLIENT_DATA:
            return {
                ...state,
                clientCode: payload
            }
        case LOGIN_USER:
            return {
                ...state,
                email: payload.email,
                password: payload.password
            }
        default:
            return state;
    }
};

export default AppReducer;
