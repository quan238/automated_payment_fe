import { handleResponse, handleError } from "../apiUtils";
import { apiConfig, commonAPI } from "../common-api";

const rootURL = 'http://localhost:5000/v1'
// const rootURL = 'https://automation-payment-be.herokuapp.com/v1'
export function executeScriptAPI(execute) {
    return commonAPI
        .post(
            `${rootURL}/execute`,
            execute,
            apiConfig
        )
        .then(handleResponse)
        .catch(handleError);
}