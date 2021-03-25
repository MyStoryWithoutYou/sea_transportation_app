import React from 'react';
import { Pagination } from 'react-bootstrap';

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const PaginationBar = () => {
    return(
        <div>
            <Pagination className="paginationBar">{items}</Pagination>
            <br />
        </div>
    );
}

export default PaginationBar;