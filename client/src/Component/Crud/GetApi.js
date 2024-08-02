import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const GetApi = () => {
  const [Profiles, setProfiles] = useState([]);
  // console.log(Profiles);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    await axios
      .get("https://65bde807dcfcce42a6f19307.mockapi.io/profiles")
      .then((res) => {
        setProfiles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(Profiles);
  // console.log(setProfiles);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {Profiles.map((profile, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>
                <img src={profile.avatar} width={50} className="" alt="" />
              </td>
              <td>{profile.name}</td>
              <td>{profile.email}</td>
              <td>{profile.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GetApi;
