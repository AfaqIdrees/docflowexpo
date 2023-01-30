import axios from "axios";
import { StoreItem } from "./asyncStorage";

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
    Object.keys(response.data).forEach((key) => {
      if (
        response.data[key].email == email &&
        response.data[key].password == password
      ) {
        loginStatus = true;
        StoreItem("@student", response.data[key]);
      }
    });
    return loginStatus;
  });
  return response;
}
