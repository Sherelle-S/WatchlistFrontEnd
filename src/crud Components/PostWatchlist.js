// // src/components/StockForm.js
// import React, { Component } from 'react';
// import { Form, Button } from 'react-bootstrap';
// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';

// class StockForm extends Component {
//   render() {
//     return (
//       <div className="StockForm">
//         <h2>Add New Stock</h2>
//         <Form>
//           {/* Stock Name */}
//           <Form.Group controlId="stockName">
//             <Form.Label>Stock Name</Form.Label>
//             <Form.Control type="text" placeholder="Enter stock name" />
//           </Form.Group>

//           {/* Symbol */}
//           <Form.Group controlId="symbol">
//             <Form.Label>Symbol</Form.Label>
//             <Form.Control type="text" placeholder="Enter stock symbol" />
//           </Form.Group>

//           {/* Currency */}
//           <Form.Group controlId="currency">
//             <Form.Label>Currency</Form.Label>
//             <Form.Control type="text" placeholder="Enter currency" />
//           </Form.Group>

//           {/* Date Purchased */}
//           <Form.Group controlId="datePurchased">
//             <Form.Label>Date Purchased</Form.Label>
//             <Form.Control type="date" />
//           </Form.Group>

//           {/* Other fields (wantsVolStock, ownsVolStock, etc.) go here */}
//           <Form.Group controlId="wantsVolStock">
//             <Form.Label>Requested Volume of Stock</Form.Label>
//             <Form.Control type="number"   />
//           </Form.Group>

//           <Form.Group controlId="hasVolStock">
//             <Form.Label>Currently Owned Volume of Stock</Form.Label>
//             <Form.Control type="number"   />
//           </Form.Group>

//           <Form.Group controlId="purchasePrice">
//             <Form.Label>Purchase price</Form.Label>
//             <Form.Control type="number"   />
//           </Form.Group>

// {/* current price will come from closing balance
//           <Form.Group controlId="CurrentPrice">
//             <Form.Label>Current Price</Form.Label>
//             <Form.Control type="number"   />
//           </Form.Group> */}

//           <Form.Group controlId="wantsVolStock">
//             <Form.Label>Requested Volume of Stock</Form.Label>
//             <Form.Control type="number"   />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default StockForm;
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function PostForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = {}
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    const formDataJson = JSON.stringify(formObject);
    try {
      const response = await fetch("http://localhost:8080/watchlist/addEntry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formDataJson,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="PostForm">
      <h2>Add New Stock</h2>
      <Form>

        {/* Stock Name */}
        <Form.Group controlId="stockName" className="mb-3 border p-3">
          <Form.Label className="form-label">Stock Name</Form.Label>
          <Form.Control type="text" placeholder="Enter stock name" className="form-control" />
        </Form.Group>

        {/* Symbol */}
        <Form.Group controlId="symbol" className="mb-3 border p-3">
          <Form.Label className="form-label">Symbol</Form.Label>
          <Form.Control type="text" placeholder="Enter stock symbol" className="form-control" />
        </Form.Group>

        {/* Currency */}
        <Form.Group controlId="currency" className="mb-3 border p-3">
          <Form.Label className="form-label">Currency</Form.Label>
          <Form.Control type="text" placeholder="Enter currency" className="form-control" />
        </Form.Group>

        {/* Date Purchased */}
        <Form.Group controlId="datePurchased" className="mb-3 border p-3">
          <Form.Label className="form-label">Date Purchased</Form.Label>
          <Form.Control type="date" className="form-control" />
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

        {/* Add the remaining Form.Group elements here */}

        <Button variant="primary" type="submit" className="mb-3">
          Submit
        </Button>
      </Form>
    </div>
  );

}

export default PostForm;

