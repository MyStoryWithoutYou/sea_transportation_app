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
        
        <tr>
          <td>1</td>
          <td>{this.state.orders[0]?.product}</td>
          <td>
            <GroupOfButtons />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Food, Washington &rarr; Detroit</td>
          <td>
            <GroupOfButtons />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Furniture, Paris &rarr; Toronto</td>
          <td>
            <GroupOfButtons />
          </td>
        </tr>
      </tbody>
    </table>
    )
  }
}

export default OrderTable;