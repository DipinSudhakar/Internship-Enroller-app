import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { removeStudentFromList } from "../Service/StudentApiFactory";

function StudentListItem(props: any) {
  const deleteStudent = (e: any) => {
    removeStudentFromList(e.target.id);
  };

  return (
    <>
      <div className="row " id={props.id}>
        <div className="col-md-12 d-flex studentList-section">
          <div className="col-md-3">
            <img src={props.image} className="studentList-img" />
          </div>
          <div className="col-md-9 text-start">
            <div className="row">
              <div className="col-md-10">
                <h4>
                  {props.number + ". "}
                  {props.name}
                </h4>
              </div>
              <div className="col-md-2 icon-section">
                <Link
                  to="/studentEdit"
                  className="link-btn"
                  state={{ id: props.id }}
                >
                  <i className="bi bi-pencil edit-btn" id={props.id}></i>
                </Link>
                <button
                  onClick={(e) => {
                    deleteStudent(e);
                  }}
                >
                  <i className="bi bi-trash3 del-btn" id={props.id}></i>
                </button>
              </div>
            </div>
            <div className="row">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                excepturi animi exercitationem temporibus, praesentium officiis
                aperiam ex repellat cum at iure tenetur eligendi sit delectus
                nam dolore assumenda nulla inventore?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentListItem;
