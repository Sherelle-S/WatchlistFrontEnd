import React, {useState} from "react";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import Header from "../pageStructure/Header";
import Footer from "../pageStructure/Footer";


function UpdateWatchlist() {
  const [uuid, setUUID] = useState(""); 
  // use state to handle input from fields 
  const handleUpdate = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = {}
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    const formDataJson = JSON.stringify(formObject);
    try {
      const response = await fetch(`localhost:8080/watchlist/updateEntry/${uuid}`, {
        method: "PUT",
        headers: {
          "Content-Type" : "application/json",
        },
        body: formDataJson,
      });

      const data = await response.json();
    } catch (error) {
      console.error("Error", error);
    }
  };

    return (
        <>
        <Header />
        
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
        <Footer />
        </>
                  
    );
}

export default UpdateWatchlist;