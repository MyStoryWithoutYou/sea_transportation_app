import React from 'react';

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
          <td>Order 1</td>
          <td>
            <GroupOfButtons />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Order 2</td>
          <td>
            <GroupOfButtons />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Order 3</td>
          <td>
            <GroupOfButtons />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default OrderTable;