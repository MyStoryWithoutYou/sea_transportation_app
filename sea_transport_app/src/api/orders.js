import axios from 'axios';

function getAllOrders(){
    return axios.get('https://my-json-server.typicode.com/MyStoryWithoutYou/webDatabase/orders')
    .then(function (response) {
        return(response.data);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
}

export default getAllOrders;
export const name = 'Orders';
