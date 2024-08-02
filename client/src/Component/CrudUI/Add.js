import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const Data = { name: Name, email: Email, phone: Phone, password: Password };
  // console.log(Data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/add", Data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast(`${res.data.message}`, { type: "success", autoClose: 1500 });
        }
      })
      .catch((e) => {
        // handle error
        console.log(e.response.data.message);

        toast(`${e.response.data.message}`, { type: "error", autoClose: 1500 });
      });
  };

  return (
    <div className="w-100 h-100">
      <div className="d-flex justify-content-center align-items-center p-5 ">
        <Form onSubmit={handleSubmit}>
          <h3 className=" text-center p-3">Add New User</h3>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="Name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="Phone"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="Password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Add;
