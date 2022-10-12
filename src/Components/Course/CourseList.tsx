import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CourseList.css";
import CourseListItem from "./CourseListItem";

function CourseList() {
  const [courses, setCourses] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:8080/schoolApp/getCourse")
      .then((res: any) => {
        setCourses(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  var number: number = 1;
  useEffect(() => {
    fetchData();
  }, []);

  // const deleteCourse = (e: any) => {
  //   removeCourse(e.target.id);
  // };
  return (
    <>
      <div className="main-container">
        <div className="container-fluid">
          <div className="row">
            <div className="add-button-section">
              <Link to="/CourseAdd" className="add-button">
                <i className="bi bi-plus-circle-fill">Add course</i>
              </Link>
            </div>
          </div>
          <div className="row">
            <h1 className="course-head">Courses</h1>
          </div>
          <div className="row">
            {/* here */}
            {courses.map((course: any) => {
              return (
                <CourseListItem
                  name={course.name}
                  incharge={course.incharge}
                  description={course.description}
                  image={"data:image/jpeg;base64," + course.courseImg}
                  number={number++}
                  id={course.courseId}
                  data={course}
                />
              );
            })}
            ;{/* course list end here */}
          </div>
        </div>
      </div>
    </>
  );
}
export default CourseList;
