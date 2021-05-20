import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class OrderEdit extends Component {

  emptyOrder = {
    loading_city: '',
    shipment_city: '',
    cargo: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyOrder
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const order = await (await fetch(`/api/order/${this.props.match.params.id}`)).json();
      this.setState({item: order});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/api/order', {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/orders');
  }

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Edit Order' : 'Add Order'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="loading_city">Loading city</Label>
            <Input type="text" name="loading_city" id="loading_city" value={item.loading_city || ''}
                   onChange={this.handleChange} autoComplete="loading_city"/>
          </FormGroup>
          <FormGroup>
            <Label for="shipment_city">Shipment city</Label>
            <Input type="text" name="shipment_city" id="shipment_city" value={item.shipment_city || ''}
                   onChange={this.handleChange} autoComplete="shipment_city"/>
          </FormGroup>          
          <FormGroup>
            <Label for="cargo">Cargo</Label>
            <Input type="text" name="cargo" id="cargo" value={item.cargo || ''}
                   onChange={this.handleChange} autoComplete="cargo"/>
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/orders">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(OrderEdit);