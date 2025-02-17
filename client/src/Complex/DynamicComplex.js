import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const DynamicComplex = () => {
  const complexData = [
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
        },
        {
          Subject4: [
            { Day: "Present", Topic: "Next.js" },
            { Day: "Absent", Topic: "GCP" },
            { Day: "Present", Topic: "Azure" }
          ]
        }
      ]
    }
  ];

  const [studentDetails, setStudentDetails] = useState({
    FirstName: "",
    LastName: "",
    Age: 0
  });

  const [subjectData, setSubjectData] = useState([]);

  const extractStudentDetails = () => {
    const [student] = complexData;
    setStudentDetails({
      FirstName: student.FirstName,
      LastName: student.LastName,
      Age: student.Age
    });
  };

  const extractSubjectData = () => {
    const [student] = complexData;
    const subjects = [];
    student.Attendance.forEach((subjectAttendance) => {
      const subjectName = Object.keys(subjectAttendance)[0];
      const subjectDetails = subjectAttendance[subjectName][0];
      subjects.push({
        name: subjectName,
        data: subjectDetails
      });
    });
    setSubjectData(subjects);
  };

  return (
    <div>
      <button onClick={extractStudentDetails}>Extract Student Details</button>
      <button onClick={extractSubjectData}>Extract Subject Data</button>

      <Tabs
        defaultActiveKey="Home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Home" title="Home">
          {/* Render Student Details */}
          <div>
            <h3>Student Details</h3>
            <p>{`Name: ${studentDetails.FirstName} ${studentDetails.LastName}`}</p>
            <p>{`Age: ${studentDetails.Age}`}</p>
          </div>
        </Tab>

        {subjectData.map((subject, index) => (
          <Tab key={index} eventKey={subject.name} title={subject.name}>
            {/* Render Subject-wise Attendance */}
            <div>
              <h3>{`${subject.name} Attendance`}</h3>
              {Object.keys(subject.data).map((day, dayIndex) => (
                <p key={dayIndex}>{`${day}: ${subject.data[day]}`}</p>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default DynamicComplex;
