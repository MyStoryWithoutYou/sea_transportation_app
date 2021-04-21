import axios from 'axios';

function getAllOrders(){
    return axios.get('http://localhost:9000/testAPI')
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
