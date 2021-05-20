import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class OrderList extends Component {

  constructor(props) {
    super(props);
    this.state = {orders: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    //this.setState({isLoading: true});

    fetch('api/orders')
      .then(response => response.json())
      .then(data => this.setState({orders: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/api/order/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedOrders = [...this.state.orders].filter(i => i.id !== id);
      this.setState({ordes: updatedOrders});
    });
  }

  render() {
    const {orders, isLoading} = this.state;

    /*if (isLoading) {
      return <p>Loading...</p>;
    }*/

    const orderList = orders.map(order => {
      return <tr key={order.id}>
        <td style={{whiteSpace: 'nowrap'}}>{order.cargo}</td>
        <td>{order.loading_city}</td>
        <td>{order.shipment_city}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/orders/" + order.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(order.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/orders/new">Add Order</Button>
          </div>
          <h3>Order List</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="20%">Loading city</th>
                <th width="20%">Shipment city</th>
                <th width="10%">Cargo</th>
                <th width="10%">Actions</th>
              </tr>
            </thead>
            <tbody>
            {orderList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default OrderList;