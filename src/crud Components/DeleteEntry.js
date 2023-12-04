import React from "react";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function DeleteEntry(){
    return(
        <>
        <div className="PostForm">
        <h2>Delete Entry</h2>
        <Form>
             {/* UUID */}
        <Form.Group controlId="UUID" className="mb-3 border p-3">
            <Form.Label className="form-label">UUID of the item you wish to delete</Form.Label>
            <Form.Control type="text" placeholder="UUID" className="form-control" />
          </Form.Group>

          <Button variant="primary" type="submit" className="mb-3">
            Submit
          </Button>

        </Form>
        </div>
        </>
    )
}

export default DeleteEntry;