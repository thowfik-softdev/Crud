import React from "react";
import { Tab, Tabs, Table } from "react-bootstrap";

const ComplexStructure = () => {
  const complex = [
    {
      FirstName: "Thowfik",
      LastName: "Juhair",
      Age: 20,
      Attendance: [
        {
          Subject1: [
            { Day: "Present", Topic: "HTML" },
            { Day: "Absent", Topic: "CSS" },
            { Day: "Present", Topic: "JavaScript" }
          ]
        },
        {
          Subject2: [
            { Day: "Present", Topic: "BootStrap" },
            { Day: "Absent", Topic: "React" },
            { Day: "Present", Topic: "React bootstrap" }
          ]
        },
        {
          Subject3: [
            { Day: "Present", Topic: "Node" },
            { Day: "Absent", Topic: "MongoDB" },
            { Day: "Present", Topic: "AWS" }
          ]
        }
      ]
    }
  ];

  // const Attendance = complex[0]?.Attendance;
  const Subject1 = complex[0]?.Attendance[0].Subject1;
  const Subject2 = complex[0]?.Attendance[1].Subject2;
  const Subject3 = complex[0]?.Attendance[2].Subject3;

  console.log(Subject2);
  
  return (
    <div>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <p>FirstName : {complex[0].FirstName}</p>
          <p>LastName : {complex[0].LastName}</p>
          <p>Age : {complex[0].Age}</p>
        </Tab>
        {/* Attendance Section */}
        <Tab eventKey="Attendance" title="Attendance">
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Subject1" title="Subject1">
              <h4>Subject 1 Attendance</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Topic</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Subject1.map((sub1, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{sub1.Topic}</td>
                      <td>{sub1.Day}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="Subject2" title="Subject2">
              <h4>Subject 2 Attendance</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Topic</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Subject2.map((sub2, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{sub2.Topic}</td>
                      <td>{sub2.Day}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="Subject3" title="Subject3">
              <h4>Subject 3 Attendance</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Topic</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Subject3.map((sub3, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{sub3.Topic}</td>
                      <td>{sub3.Day}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ComplexStructure;
