import httpClient from '../http-common';
const payment = (amount) => {

    return httpClient.post('/payment',JSON.stringify({amount:amount,info:'order_request'}))
}

export default{payment}