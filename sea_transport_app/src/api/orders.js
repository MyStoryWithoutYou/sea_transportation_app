import axios from 'axios';

function getAllOrders(){
    return axios.get('https://my-json-server.typicode.com/MyStoryWithoutYou/webDatabase')
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
