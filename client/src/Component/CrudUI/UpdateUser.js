import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";

const UpdateUser = () => {

  const location = useLocation();
  const profileData = location.state;
  console.log(profileData);
  
  const [Name, setName] = useState(profileData.name);
  const [Email, setEmail] = useState(profileData.email);
  const [Phone, setPhone] = useState(profileData.phone);
  const [Password, setPassword] = useState(profileData.password);
  const Data = {userId: profileData._id, name: Name, email: Email, phone: Phone, password: Password };

  // console.log(Data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put("http://localhost:5000/update-user", Data)
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
          <h3 className=" text-center p-3">Update User</h3>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="Name"
              placeholder="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Email"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="Phone"
              placeholder="Phone"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateUser;
