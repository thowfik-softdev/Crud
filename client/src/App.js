import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import "./App.css";
import ComplexStructure from "./Complex/ComplexStructure";
import DynamicComplex from "./Complex/DynamicComplexStructure";
import CrudUI from "./Component/CrudUI/CrudUI";
import Add from "./Component/CrudUI/Add";
import UpdateUser from "./Component/CrudUI/UpdateUser";
import ObjectManipulation from "./Component/ObjectManipulation";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/complex">Complex</Link>
            </li>
            <li>
              <Link to="/dynamic-complex">Complex With Dynamic</Link>
            </li>
            <li>
              <Link to="/crud-ui">CRUD with UI</Link>
            </li>
            <li>
              <Link to="/object-manipulation">Object Manipulation</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Complex" element={<ComplexStructure />} />
          <Route path="/dynamic-complex" element={<DynamicComplex />} />
          <Route path="/crud-ui" element={<CrudUI />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update-user" element={<UpdateUser />} />
          <Route path="/object-manipulation" element={<ObjectManipulation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
