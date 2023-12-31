import React from "react";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function UpdateWatchlist() {
    return (
        <>
        
        <Form className="PostForm">
            <h2>Update Entry</h2>
        {/* UUID */}
        <Form.Group controlId="UUID" className="mb-3 border p-3">
            <Form.Label className="form-label">UUID</Form.Label>
            <Form.Control type="text" placeholder="UUID" className="form-control" />
          </Form.Group>

        {/* symbol */}
         <Form.Group controlId="symbol" className="mb-3 border p-3">
            <Form.Label className="form-label">Symbol</Form.Label>
            <Form.Control type="text" placeholder="Enter stock symbol" className="form-control" />
          </Form.Group>

          {/* Currency */}
          <Form.Group controlId="currency" className="mb-3 border p-3">
            <Form.Label className="form-label">Currency</Form.Label>
            <Form.Control type="text" placeholder="Enter currency" className="form-control" />
          </Form.Group>

          {/* wantsVolStock,  */}
          <Form.Group controlId="wantsVolStock" className="mb-3 border p-3">
            <Form.Label className="form-label">Requested Volume of Stock</Form.Label>
            <Form.Control type="number" className="form-control" />
          </Form.Group>

          {/* ownsVolStock */}
          <Form.Group controlId="ownsVolStock" className="mb-3 border p-3">
            <Form.Label className="form-label">Currently Owned Volume of Stock</Form.Label>
            <Form.Control type="number" className="form-control" />
          </Form.Group>

          {/* purchasePrice */}
          <Form.Group controlId="purchasePrice" className="mb-3 border p-3">
            <Form.Label className="form-label">Purchase price</Form.Label>
            <Form.Control type="number" className="form-control" />
          </Form.Group>

          {/* Date Sold
          <Form.Group controlId="datePurchased" className="mb-3 border p-3">
          <Form.Label className="form-label">Date Sold</Form.Label>
          <Form.Control type="date" className="form-control" />
        </Form.Group> */}

        <Button variant="primary" type="submit" className="mb-3">
            Submit
          </Button>
        </Form>
        </>

                  
    );
}

export default UpdateWatchlist;