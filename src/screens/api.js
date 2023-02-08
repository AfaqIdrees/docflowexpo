import axios from "axios";
import { GetItem, StoreItem } from "./asyncStorage";

const BASE_URL = "https://docflow-3a5d5-default-rtdb.firebaseio.com";
export async function CreateStudent(
  fname,
  lname,
  year,
  program,
  rollNum,
  email,
  password
) {
  console.log(
    "CreateStudent",
    fname,
    lname,
    year,
    program,
    rollNum,
    email,
    password
  );
  const response = axios
    .post(`${BASE_URL}/students.json`, {
      firstName: fname,
      lastName: lname,
      year: year,
      program: program,
      rollNum: rollNum,
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response.data);
      return true;
    })
    .catch((err) => {
      console.log("Error:", err);
      return false;
    });

  return response;
}

export async function LoginStudent(email, password) {
  console.log("LoginStudent", email, password);
  const response = axios.get(`${BASE_URL}/students.json`).then((response) => {
    let loginStatus = false;
    Object.keys(response.data).forEach((key, index) => {
      if (
        response.data[key].email == email &&
        response.data[key].password == password
      ) {
        loginStatus = true;
        StoreItem("@student", {
          ...response.data[key],
          studentId: Object.keys(response.data)[index],
        });
      }
    });
    return loginStatus;
  });
  return response;
}

export function CreateLeave({ student }, reason, days, date, description) {
  console.log(student);
  const response = axios
    .post(`${BASE_URL}/documents.json`, {
      type: "leave",
      firstName: student.firstName,
      lastName: student.lastName,
      year: student.year,
      program: student.program,
      rollNum: student.rollNum,
      reason: reason,
      days: days,
      date: date,
      description: description,
      studentId: student.studentId,
      status: "New",
      adminComments: "",
    })
    .then((response) => {
      console.log(response.data);
      return true;
    })
    .catch((err) => {
      console.log("Error:", err);
      return false;
    });

  return response;
}

export function CreateScholarshipForm(
  { student },
  cgpa,
  semester,
  description
) {
  console.log(student);
  const response = axios
    .post(`${BASE_URL}/documents.json`, {
      type: "scholarship",
      firstName: student.firstName,
      lastName: student.lastName,
      year: student.year,
      program: student.program,
      rollNum: student.rollNum,
      description: description,
      cgpa: cgpa,
      semester: semester,
      studentId: student.studentId,
      status: "New",
      adminComments: "",
    })
    .then((response) => {
      console.log(response.data);
      return true;
    })
    .catch((err) => {
      console.log("Error:", err);
      return false;
    });

  return response;
}

export async function GetMyForms() {
  let student_id = "";
  const forms = GetItem("@student")
    .then((res) => {
      student_id = res.studentId;
      console.log(student_id);
      let forms = axios
        .get(`${BASE_URL}/documents.json`)
        .then((resp) => {
          let myForms = [];
          Object.keys(resp.data).forEach((key) => {
            resp.data[key].studentId == student_id
              ? myForms.push({ ...resp.data[key], formId: key })
              : "";
          });
          return myForms;
        })
        .catch((err) => {
          console.log("Can not get my documents:", err);
        });
      return forms;
    })
    .catch((err) => {
      console.log("Can not get student id:", err);
    });
  return forms;
}

export function CreateFeeInstallmentForm(
  { student },
  cgpa,
  semester,
  fee,
  description
) {
  console.log(student);
  const response = axios
    .post(`${BASE_URL}/documents.json`, {
      type: "fee-installment",
      firstName: student.firstName,
      lastName: student.lastName,
      year: student.year,
      program: student.program,
      rollNum: student.rollNum,
      description: description,
      cgpa: cgpa,
      semester: semester,
      studentId: student.studentId,
      status: "New",
      adminComments: "",
      fee: fee,
    })
    .then((response) => {
      console.log(response.data);
      return true;
    })
    .catch((err) => {
      console.log("Error:", err);
      return false;
    });

  return response;
}

export function CreateCustomForm({ student }, reason, description) {
  console.log(student);
  const response = axios
    .post(`${BASE_URL}/documents.json`, {
      type: "custom",
      firstName: student.firstName,
      lastName: student.lastName,
      year: student.year,
      program: student.program,
      rollNum: student.rollNum,
      reason: reason,
      description: description,
      studentId: student.studentId,
      status: "New",
      adminComments: "",
    })
    .then((response) => {
      console.log(response.data);
      return true;
    })
    .catch((err) => {
      console.log("Error:", err);
      return false;
    });

  return response;
}

export function DeleteForm(formId) {
  const response = axios
    .delete(`${BASE_URL}/documents/${formId}.json`)
    .then((response) => {
      console.log("Deleted in api");
      return true;
    })
    .catch((err) => {
      console.log("Error:", err);
      return false;
    });

  return response;
}
