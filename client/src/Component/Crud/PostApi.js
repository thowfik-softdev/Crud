import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostApi = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Avatar, setAvatar] = useState("");

  const Data = { name: Name, email: Email, phone: Phone, avatar: Avatar };
  console.log(Data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://65bde807dcfcce42a6f19307.mockapi.io/profiles", Data)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          toast(`Created Successfully`, { type: "success", autoClose: 1500 });
        }
      })
      .catch((e) => {
        // handle error
        console.log(e);
      });
  };

  return (
    <div className="w-100 h-100">
      <div className="d-flex justify-content-center align-items-center p-5 ">
        <Form onSubmit={handleSubmit}>
          <h3 className=" text-center p-3">Post API</h3>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="Name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="Phone"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="FormBasicAvatar">
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              type="Avatar"
              placeholder="Avatar"
              onChange={(e) => setAvatar(e.target.value)}
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

export default PostApi;
