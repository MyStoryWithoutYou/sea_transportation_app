import axios from 'axios';

function getAllOrders(){
    return axios.get('http://localhost:8080sihes/orders')
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
