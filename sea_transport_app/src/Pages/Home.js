import React from "react";

import SearchBar from '../Components/SearchBar';
import OrderTable from '../Components/OrderTable';

const Home = () => {
    return(
        <div align="center">
            <SearchBar />
            <OrderTable />
        </div>
    )
}

export default Home;