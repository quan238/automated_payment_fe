const store = 'app';

export const LOGIN_USER = `${store}/LOGIN_USER`
export const UPLOAD_CLIENT_DATA = `${store}/UPLOAD_CLIENT_DATA`
export const DISPATCH_BANK_DATA = `${store}/DISPATCH_BANK_DATA`

export default class AppAction {

    static uploadBankData(bank) {
        return {
            type: DISPATCH_BANK_DATA,
            payload: bank
        }
    }

    static loginUser(user) {
        return {
            type: LOGIN_USER,
            payload: user
        };
    }

    static uploadClientData(data) {
        return {
            type: UPLOAD_CLIENT_DATA,
            payload: data
        };
    }
}
