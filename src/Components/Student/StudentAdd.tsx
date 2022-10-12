import React, { useState } from "react";
import { enrollStudent } from "../Service/StudentService";
import "./StudentAdd-style.css";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { getTsBuildInfoEmitOutputFilePath } from "typescript";

function StudentAdd() {
  const [tempName, setName] = useState("");
  const [tempStudentId, setStudentId] = useState(0);
  const [tempParentsName, setParentsName] = useState("");
  const [tempPhoneNo, setPhoneNo] = useState(0);
  const [tempEmail, setEmail] = useState("");
  const [tempImage, setImage] = useState<any>(null);
  const [tempAddress, setAddress] = useState("");
  const [tempRemarks, setRemarks] = useState("");

  //adding new student
  const addStudent = async (e: any) => {
    e.preventDefault();
    const data = {
      name: tempName,
      id: tempStudentId,
      parentsName: tempParentsName,
      phoneNo: tempPhoneNo,
      email: tempEmail,
      address: tempAddress,
      remarks: tempRemarks,
    };

    if (tempName.length < 10 && tempName != null && tempName != "") {
      if (tempStudentId != 0) {
        if (
          tempParentsName.length < 10 &&
          tempParentsName != null &&
          tempParentsName != ""
        ) {
          if (tempPhoneNo.toString().length! == 10) {
            if (tempEmail != null && tempEmail != "") {
              if (tempImage != null) {
                if (tempAddress != null && tempAddress != "") {
                  if (tempRemarks != null && tempRemarks != "") {
                    enrollStudent(data, tempImage);
                    alert(
                      "Succusfully added new Student With Id : " + tempStudentId
                    );
                    window.location.reload();
                  } else {
                    alert("Please provide Remarks");
                  }
                } else {
                  alert("Please provide an Address!");
                }
              } else {
                alert("Please select an image!");
              }
            } else {
              alert("Please provide an Email!");
            }
          } else {
            alert(
              "Please check the phone number provided! \nHint : Max limit 10!"
            );
          }
        } else {
          alert(
            "Please check the Parents name field \nHint : Max naWme length is 10!"
          );
        }
      } else {
        alert("Please provide an id for student!");
      }
    } else {
      alert("Please check the name field \nHint : Max name length is 10!");
    }
  };

  //functionality for resetting fields
  const clearFields = (e: any) => {
    window.location.reload();
  };

  return (
    <div>
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
                  <div id="error-field"></div>
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
                    id="phone"
                    type="number"
                    onChange={(e) => {
                      setPhoneNo(e.target.valueAsNumber);
                      // if (e.target.value.length > 10) {
                      //   alert("Maximum size for phone number id 10");
                      // }
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
    </div>
  );
}

export default StudentAdd;
