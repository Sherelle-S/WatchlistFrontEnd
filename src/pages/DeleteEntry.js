import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../pageStructure/Header";
import Footer from "../pageStructure/Footer";

function DeleteEntry() {
  const [uuid, setUUID] = useState(""); // State to store UUID entered by the user

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/watchlist/deleteEntry/${uuid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Entry has been deleted");
        setUUID("");
      } else {
        console.log("Failed to delete entry");
      }
    } catch (error) {
      console.log("Error deleting entry:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="PostForm">
        <h2>Delete Entry</h2>
        <Form onSubmit={handleFormSubmit}>
          {/* UUID */}
          <Form.Group controlId="UUID" className="mb-3 border p-3">
            <Form.Label className="form-label">UUID of the item you wish to delete</Form.Label>
            <Form.Control
              type="text"
              placeholder="UUID"
              className="form-control"
              value={uuid}
              onChange={(e) => setUUID(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-3 delete-button">
            Submit
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}

export default DeleteEntry;
