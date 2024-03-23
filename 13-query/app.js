'use ctrict'
function objectToQueryString(params) {
    return Object.keys(params).map(key => `${(key)}=${(params[key])}`).join('&');
}
    
const queryParameters = {search: "Вася", take: 10};
const queryString = objectToQueryString(queryParameters);
console.log(queryString);