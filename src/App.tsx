import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import StudentAdd from "./Components/Student/StudentAdd";
import Navbar from "./Components/Navbar/Navbar";
import StudentList from "./Components/Student/StudentList";
import StudentEdit from "./Components/Student/StudentEdit";
import CourseList from "./Components/Course/CourseList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/course" element={<CourseList />} />
        <Route path="/student" element={<StudentList />} />
        <Route path="/studentAdd" element={<StudentAdd />} />
        <Route path="/studentEdit" element={<StudentEdit />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
