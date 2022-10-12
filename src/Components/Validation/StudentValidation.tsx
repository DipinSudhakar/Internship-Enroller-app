import * as yup from "yup";

//external validator
// export const userScheme = yup.object().shape({
//   name: yup.string().required(),
//   id: yup.number().required(),
//   parentsName: yup.string().required(),
//   phoneNo: yup.number().required(),
//   email: yup.string().email().required(),
//   address: yup.string().required(),
//   remarks: yup.string().required(),
// });

//not used
export const validate = (data: any, image: any) => {
  if (data.name.length < 10 && data.name != null && data.name != "") {
    if (data.id != 0) {
      if (
        data.parentsName.length < 10 &&
        data.parentsName != null &&
        data.parentsName != ""
      ) {
        if (data.phoneNo.toString().length! == 10) {
          if (data.phoneNo != null && data.phoneNo != "") {
            if (image != null) {
              if (data.address != null && data.address != "") {
                if (data.remarks != null && data.remarks != "") {
                  return true;
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
