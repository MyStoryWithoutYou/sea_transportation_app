import React from 'react';

import getAllOrders, { name } from '../api/orders';
import GroupOfButtons from '../Components/GroupOfButtons';

class OrderTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    getAllOrders().then((data) => {
      debugger;
      this.setState({
        orders: data,
      });
      debugger;
  })

  
}
 renderOrder(order, index) {
  return(
    <tr key={index}>
      <td>{index + 1}</td>
      <td><strong>{order.cargo + "; "}</strong>
      {order.loading_city + " -> " + order.shipment_city}</td>
      <td><GroupOfButtons /></td>
    </tr>  
  )
}

  render(){
    return(
      <table align="center" className="orders"> 
      <thead>
        <tr>
          <th>id</th>
          <th>Orders</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {this.state.orders.map(this.renderOrder)}
      </tbody>
    </table>
    )
  }
}

export default OrderTable;