import React, { useEffect, useState } from "react";
import "./Camera.css";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

function Camera() {

  const { id } = useParams();
  const [details, setDetails] = useState({});

  const fetchData = async () => {
    console.log(id);
    try {
      const response = await axios.get("http://localhost:8080/cam/" + id);
      console.log(response.data);
      setDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  },[])

  return (
    <>
      <Header />
      <div className="camera-parent">
        <div className="camera-major">
          <div className="camera"></div>
          <div className="camera-details">
            <h3>CAMERA DETAILS</h3>
            {details && (
        <>
          <p>CAMERA ID: {details.id}</p>
          <p>LOCATION: {details.location && details.location.toUpperCase()}</p>
          <p>LONGITUDE: {details.longitude}</p>
          <p>LATITUDE: {details.latitude}</p>
          <p>STATUS: {details.status && details.status.toUpperCase()}</p>
        </>
      )}
          </div>      
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Camera;
