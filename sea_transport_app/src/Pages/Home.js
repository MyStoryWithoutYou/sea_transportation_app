import React from "react";

import SearchBar from '../Components/SearchBar';
import OrderTable from '../Components/OrderTable';
import PaginationBar from '../Components/PaginationBar';

const Home = () => {
    return(
        <div align="center">
            <SearchBar />
            <OrderTable />
            <PaginationBar />
        </div>
    )
}

export default Home;