import axios from "axios";
import { count } from "console";
import React, { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./StudentList-style.css";
import StudentListItem from "./StudentListItem";

function StudentList() {
  const url = "http://localhost:8080/schoolApp/";

  const [name, setName] = useState("");
  const [imageList, setImageList] = useState<string[]>([]);
  const [remarks, setRemarks] = useState("");
  const [studentNameList, setStudentNameList] = useState<string[]>([]);

  var number: number = 1;
  useEffect(() => {
    axios
      .get(url + "getStudentList")
      .then((res: any) => {
        const names: string[] = [];
        res.data.map((item: any) => {
          names.push(item);
        });
        setStudentNameList(names);
      })
      .catch((res) => {
        console.log("error!");
      });
  }, []);

  return (
    <>
      <div className="studentList-main-wrapper">
        <div className="studentList-container">
          <div className="container">
            <div className="row">
              <div className="addStudent-btn-section">
                <Link to="/studentAdd" className="addStudent-btn">
                  <i className="bi bi-plus-circle-fill m-2"></i>
                  Add Student
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 studentList-heading-section">
                <h1>STUDENTS</h1>
              </div>
            </div>
            {/* list element start*/}
            <div className="row student-list-container">
              <>
                {studentNameList.map((student: any) => {
                  return (
                    <StudentListItem
                      name={student.name}
                      image={"data:image/jpeg;base64," + student.image}
                      number={number++}
                      id={student.id}
                      data={student}
                    />
                  );
                })}
              </>
            </div>
            {/* list element end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentList;
