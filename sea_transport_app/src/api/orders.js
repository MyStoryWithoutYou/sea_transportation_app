import axios from 'axios';

function getAllOrders(){
    return axios.get('http://localhost:8080/')
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
