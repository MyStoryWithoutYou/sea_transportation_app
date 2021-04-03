import React from 'react';

import getAllOrders, { name } from '../api/orders';
import GroupOfButtons from '../Components/GroupOfButtons';

const OrderTable = () => {
  return(
    <table align="center" className="orders">
      <thead>
        <tr>
          <th>id</th>
          <th>Order Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Cars, London &rarr; Moscow</td>
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

export default OrderTable;