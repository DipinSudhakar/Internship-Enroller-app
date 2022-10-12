import axios from "axios";

var url = "http://localhost:8080/schoolApp/";

export const removeCourseFromList = (id: any) => {
  axios
    .delete(url + "delCourse/" + id)
    .then((res: any) => {
      alert("successfully deleted student with id: " + id);
      window.location.reload();
    })
    .catch((error: any) => {
      console.log(error);
    });
};
