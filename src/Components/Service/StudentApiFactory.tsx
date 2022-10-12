import axios from "axios";
import React, { useState } from "react";

var url = "http://localhost:8080/schoolApp/";

export function addStudentDetails(data: any) {
  axios
    .post(url + "addStudent", data)
    .then((res: any) => {
      alert("successfully added student with id: " + data.get("id"));
    })
    .catch((error) => {
      console.log(error);
    });
}

export const removeStudentFromList = (id: any) => {
  axios
    .delete(url + "deleteStudent/" + id)
    .then((res: any) => {
      alert("successfully deleted student with id: " + id);
      window.location.reload();
    })
    .catch((error: any) => {
      console.log(error);
    });
};
