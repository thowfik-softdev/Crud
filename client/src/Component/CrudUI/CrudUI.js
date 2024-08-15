import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const CrudUI = () => {
  const [Profiles, setProfiles] = useState([]);
  console.log(Profiles);

  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = async () => {
    await axios
      .get("http://localhost:5000/get-all")
      .then((res) => {
        console.log(res);
        setProfiles(res.data.return);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((res) => {
        console.log(res);
        setProfiles(Profiles.filter((profile) => profile._id !== id));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const navigate = useNavigate();
  const addUser = () => {
    navigate("/add");
  };
  const updateUser = (profile) => {
    console.log("Profile: ", profile);
    navigate("/update-user", { state: profile });
  };

  return (
    <div>
      <Button variant="success" onClick={addUser}>
        Add
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Profiles.map((profile, index) => (
            <tr key={profile._id}>
              <td>{index + 1}</td>
              <td>{profile.name}</td>
              <td>{profile.email}</td>
              <td>{profile.phone}</td>
              <td>{profile.password}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    updateUser(profile);
                  }}
                >
                  Update
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDelete(profile._id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudUI;
