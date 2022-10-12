import React from "react";
import { setEnvironmentData } from "worker_threads";
import { addStudentDetails } from "./StudentApiFactory";

export const enrollStudent = (data: any, tempImage: any) => {
  var formData = new FormData();
  formData = appendImageFile(tempImage, formData, data);
  addStudentDetails(formData);
};

//appending image file to formData
const appendImageFile = (tempImage: any, formData: any, data: any) => {
  formData.append("image", tempImage);
  return toFormData(data, formData);
};

//appending other data to formData
const toFormData = (data: any, formData: any) => {
  for (var key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};

export const convertToId = (tempId: any) => {
  var str = JSON.stringify(tempId);
  var id = str.replace(/[^0-9]*/g, "");
  return id;
};
