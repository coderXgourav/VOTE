import React, { useState } from "react";
import Header from "../../components/user/Header";
import { Link } from "react-router-dom";
import { message } from "antd";
import axios from "axios";

const Signup = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const off = (message) => {
    messageApi.open({
      type: "error",
      content: message,
    });
  };
  const success = (message) => {
    messageApi.open({
      type: "success",
      content: message,
    });
  };
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formSubmitHandler =async (e) => {
    e.preventDefault();
    if (data.password != data.confirmPassword) {
      off("Password & Confirm Password not matched.");
      return;
    }
    const url = import.meta.env.VITE_SERVER_URL;
try{
  const result = await axios.post(`${url}/user/signup`, {
    ...data,fullName:{
    firstName:data.firstName,
    lastName:data.lastName
    }
  });
  console.log(result);
  const {message} = result?.data;
success(message);
setData({ firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",})

}catch(error){
  const {message} = error.response.data;
  off(message);
}
  };


  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setData({ ...data, firstName: value });
        break;
      case "lastName":
        setData({ ...data, lastName: value });
        break;
      case "email":
        setData({ ...data, email: value });
        break;
      case "username":
        setData({ ...data, username: value });
        break;
      case "password":
        setData({ ...data, password: value });
        break;
      case "confirmPassword":
        setData({ ...data, confirmPassword: value });
        break;
      default:
        break;
    }
  };
  return (
    <>
      {contextHolder}
      <Header />
      <div>
        <div style={{}}>
          <p
            className="subTitle"
            style={{ fontSize: "32px", textAlign: "center" }}
          >
            Signup Now
          </p>
          <form
            onSubmit={(e) => {
              formSubmitHandler(e);
            }}
            style={{ textAlign: "center" }}
          >
            <input
              type="text"
              name="firstName"
              placeholder="John"
              value={data.firstName}
              onChange={(e) => {
                formChangeHandler(e);
              }}
              style={{
                width: "50%",
                padding: "15px",
                marginTop: "10px",
                borderRadius: "5px",
                outline: "none",
                border: "0px",
              }}
            />
            <input
              type="text"
              placeholder="Doe"
              name="lastName"
              value={data.lastName}
              onChange={formChangeHandler}
              style={{
                width: "50%",
                padding: "15px",
                marginTop: "10px",
                borderRadius: "5px",
                outline: "none",
                border: "0px",
              }}
            />
            <input
              type="email"
              value={data.email}
              name="email"
              onChange={formChangeHandler}
              placeholder="john@gmail.com"
              style={{
                width: "50%",
                padding: "15px",
                marginTop: "10px",
                borderRadius: "5px",
                outline: "none",
                border: "0px",
              }}
            />
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={formChangeHandler}
              placeholder="username"
              style={{
                width: "50%",
                padding: "15px",
                marginTop: "10px",
                borderRadius: "5px",
                outline: "none",
                border: "0px",
              }}
            />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={formChangeHandler}
              placeholder="Password"
              style={{
                width: "50%",
                padding: "15px",
                marginTop: "10px",
                borderRadius: "5px",
                outline: "none",
                border: "0px",
              }}
            />
            <input
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={formChangeHandler}
              placeholder="Confirm Password"
              style={{
                width: "50%",
                padding: "15px",
                marginTop: "10px",
                borderRadius: "5px",
                outline: "none",
                border: "0px",
              }}
            />
            <div>
              {" "}
              <br />
              <button
                style={{
                  padding: "10px 50px",
                  backgroundColor: "white",
                  color: "black",
                  border: "0px",
                  outline: "none",
                  borderRadius: "5px",
                }}
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
