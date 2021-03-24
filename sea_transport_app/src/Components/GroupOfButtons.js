import React from 'react';
import { ButtonGroup, Button} from 'react-bootstrap';

const GroupOfButtons = () => {
    return(
        <ButtonGroup>
            <Button variant="secondary">Watch</Button>
            <Button variant="secondary">Edit</Button>
            <Button variant="secondary">Delete</Button>
        </ButtonGroup>
    )
}

export default GroupOfButtons; 