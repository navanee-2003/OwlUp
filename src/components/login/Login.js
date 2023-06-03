import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Button from "@mui/material/Button";
import AntdButton from "antd/lib/button";
import { useState } from "react";
import axios from "axios";
import { notification } from "antd";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserName = (e) => {
    e.preventDefault();
    setUserName(e.currentTarget.value);
    // console.log(userName);
  };

  const handlePassword = (e) => {
    setPassword(e.currentTarget.value);
  }
  console.log(userName);
  console.log(password);

  const handleLogin = async () => {
    try {
      // const response = await axios.get('http://localhost:8080/login/' + userName);
      // if(password === response.data && password.length !== 0){
      //   navigate('/cam');
      // }
      if(userName == 'praveen' && password =='helloPal@21'){
        navigate('/cam');
      }
      else{
        notification.open({
          message: "Check your password",
          description:
            "Please review the password you entered as it appears to be incorrect.",
          type: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="login-parent">
      <div className="login-major">
        <div className="img"></div>
        <div className="container">
          <div className="logo"></div>
          <div className="credentials">
            <input
              type="text"
              name=""
              id="username"
              placeholder="USERNAME"
              onChange={(e) => handleUserName(e)}
              value={userName}
            />
            <input
              type="password"
              name=""
              id="password"
              placeholder="PASSWORD"
              onChange={(e) => handlePassword(e)}
              value={password}
            />
            <div className="btns">
              <Button variant="contained" color="success" onClick={handleLogin}>
                LOGIN
              </Button>
              <AntdButton type="primary" danger>
                SIGNUP
              </AntdButton>
            </div>
            {/* <Link to={"/"}>FORGOT PASSWORD?</Link> */}
            <a href="/">FORGOT PASSWORD?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
