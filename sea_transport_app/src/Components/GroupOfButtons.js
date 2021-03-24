import React from 'react';
import { ButtonGroup, Button} from 'react-bootstrap';

const GroupOfButtons = () => {
    return(
        <ButtonGroup>
            <Button className="leftButton" variant="success">Watch</Button>
            <Button className="midButton" variant="warning">Edit</Button>
            <Button variant="danger">Delete</Button>
        </ButtonGroup>
    )
}

export default GroupOfButtons; 