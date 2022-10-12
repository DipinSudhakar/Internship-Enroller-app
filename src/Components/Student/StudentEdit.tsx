import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import App from "../../App";
import { convertToId } from "../Service/StudentService";

function StudentEdit() {
  const location = useLocation();
  const [tempId, setId] = useState<any>(location.state);

  const [tempName, setName] = useState("");
  const [tempStudentId, setStudentId] = useState(0);
  const [tempParentsName, setParentsName] = useState("");
  const [tempPhoneNo, setPhoneNo] = useState(0);
  const [tempEmail, setEmail] = useState("");
  const [tempImage, setImage] = useState<any>(null);
  const [tempAddress, setAddress] = useState("");
  const [tempRemarks, setRemarks] = useState("");

  var url = "http://localhost:8080/schoolApp/";

  //converting id from object
  var id = convertToId(tempId);

  useEffect(() => {
    axios
      .get(url + "getStudentList/" + id)
      .then((res: any) => {
        const names: string[] = [];
        res.data.map((item: any) => {
          setName(item.name);
        });
        console.log(tempName);
      })
      .catch((res) => {
        console.log("error!");
      });
  });

  return (
    <>
      {/* <div>
        <div className="main-wrapper">
          <div className="StudentAdd-container">
            <div className="container">
              <div className="row">
                <div className="col-md-12 studentAdd-heading-section">
                  <h1>ADD STUDENTS</h1>
                </div>
              </div>
              <form
                onSubmit={(e) => {
                  addStudent(e);
                }}
                encType="multipart/form-data"
                method="POST"
              >
                <div className="row d-flex justify-content-center studentAdd-form-section">
                  <div className="col-md-3 studentAdd-input-section">
                    <label>Name</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-3 studentAdd-input-section">
                    <label>Student ID</label>
                    <input
                      type="number"
                      onChange={(e) => {
                        setStudentId(e.target.valueAsNumber);
                      }}
                    />
                  </div>
                  <div className="col-md-3 studentAdd-input-section">
                    <label>Parents Name</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setParentsName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row d-flex justify-content-center studentAdd-form-section">
                  <div className="col-md-3 studentAdd-input-section">
                    <label>Phone No:</label>
                    <input
                      type="number"
                      onChange={(e) => {
                        setPhoneNo(e.target.valueAsNumber);
                      }}
                    />
                  </div>
                  <div className="col-md-3 studentAdd-input-section">
                    <label>Email</label>
                    <input
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-3 studentAdd-input-section">
                    <div className="div text-start">
                      <label>Upload Image</label>
                    </div>
                    <input
                      type="file"
                      onChange={(e: any) => {
                        setImage(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <div className="row d-flex justify-content-center studentAdd-form-section">
                  <div className="col-md-5 studentAdd-input-section address-section">
                    <label>Address</label>
                    <div className="div">
                      <input
                        type="text"
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        className="address"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 studentAdd-input-section remarks-section">
                    <label>Remarks</label>
                    <div className="div">
                      <input
                        type="text"
                        onChange={(e) => {
                          setRemarks(e.target.value);
                        }}
                        className="remarks"
                      />
                    </div>
                  </div>
                </div>
                <div className="studentAdd-makeChange-section">
                  <div className="row">
                    <div className="col-md-12 d-flex">
                      <div className="button m-3">
                        <button type="submit">Save</button>
                      </div>
                      <div className="button  m-3 ">
                        <button
                          onClick={(e) => {
                            clearFields(e);
                          }}
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default StudentEdit;
