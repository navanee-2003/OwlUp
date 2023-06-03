import React from "react";
import "./AddCam.css";
import { notification } from "antd";
import Button from "@mui/material/Button";
import AntdButton  from 'antd/lib/button';
import { Navigate, useNavigate } from "react-router-dom";

function AddCam() {
  const navigate = useNavigate();

  const handleAddCamera = () => {
    notification.open({
      message: "Invalid ONVIF IP",
      description:
        "Please ensure that the given ONVIF IP is Correct and try again.",
        type: "error",
    });
  }
  const handleCancel = () => {
    navigate('/cam');
  }
  return (
    <div className="addcam-parent">
      <div className="addcam-major">
        <div className="img"></div>
        <div className="container">
          <div className="logo"></div>
          <div className="credentials">
            <input type="text" name="" id="" placeholder="NAME" />
            <input type="text" name="" id="" placeholder="ONVIF IP" />
            <input type="text" name="" id="" placeholder="LATITUDE" />
            <input type="text" name="" id="" placeholder="LONGITUDE" />
            <input type="text" name="" id="" placeholder="LOCATION" />
            <input type="text" name="" id="" placeholder="USERNAME" />
            <input type="text" name="" id="" placeholder="PASSWORD" />
            <input type="text" name="" id="" placeholder="STATUS" />
            <div className="btns">
              <Button variant="contained" color="success" onClick={handleAddCamera}>
                ADD CAMERA
              </Button>
              <AntdButton type="primary" danger onClick={handleCancel}>
                CANCEL
              </AntdButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCam;
