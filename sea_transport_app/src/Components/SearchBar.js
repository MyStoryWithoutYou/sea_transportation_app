import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
    return(
        <div className="searchBar">
            <Form inline>
                <FormControl type="text" placeholder="Search" />
                <Button className="searchButton" variant="info">Search</Button>
            </Form>
        </div>
    )
}

export default SearchBar;