import React from "react";
import { NavLink } from "react-router-dom";
import CourseList from "../Course/CourseList";
import CourseListHome from "../Course/CourseListHome";
import CourseListItem from "../Course/CourseListItem";
import StudentList from "../Student/StudentList";
import "./Home-style.css";

function Home() {
  return (
    <>
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 banner-section">
              <div className="intro-section">
                <h1>READY TO MANAGE</h1>
                <h1 className="second-head">AN INSTITUTE</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  <br />
                  Hic illum cumque recusandae facilis ipsum{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CourseListHome />
      {/* need couselist component here*/}
    </>
  );
}

export default Home;
