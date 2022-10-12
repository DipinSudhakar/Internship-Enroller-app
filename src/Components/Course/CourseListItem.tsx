import React from "react";
import { removeCourseFromList } from "../Service/CourseApiFactory";

export default function CourseListItem(props: any) {
  const deleteCourse = (e: any) => {
    console.log(props.id);
    removeCourseFromList(e.target.id);
  };

  return (
    <>
      <div className="row">
        <div className="course col-md-12 d-flex courseList-section">
          <div className="com-md-3">
            <img className="course-img" src={props.image} alt="java img" />
          </div>
          <div className="col-md-9 courseList-content-section">
            <div className="course-body">
              <h4>
                {props.number} .{props.name}
              </h4>
              <h5>{props.incharge}</h5>
              <p>{props.description}</p>
            </div>
          </div>
          <i className="bi bi-pencil editIcon"></i>

          <button
            className="delIcon"
            onClick={(e) => {
              deleteCourse(e);
            }}
          >
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </>
  );
}
