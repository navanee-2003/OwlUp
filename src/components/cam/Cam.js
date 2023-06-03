import React, { useEffect, useState , useRef } from "react";
import "./Cam.css";
import { notification } from "antd";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import io from 'socket.io-client';
import axios from "axios";

function Cam() {
  const [cam, setCam] = useState([]);
  // const videoRef = useRef(null);
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredItemId(itemId);
    console.log(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/cam');
      setCam(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  },[])
  
  const openNotification = () => {
    notification.open({
      message: "Fire Accident Near Kuniyamuthur",
      description:
        "On a seemingly ordinary day in the bustling neighborhood of Kuniyamuthur, an unfortunate incident unfolded that would leave an indelible mark on the community",
      type: "warning",
    });
  };

  //   useEffect(() => {
  //     const socket = io('http://localhost:8080'); // Replace with your Socket.IO server URL
  
  //     socket.on('dataEvent', (data) => {
  //       // Handle received data
  //       console.log('Received data:', data);
  //     });
  
  //     // Clean up the socket connection when the component is unmounted
  //     return () => {
  //       socket.disconnect();
  //     };
  // }, []);

  // useEffect(() => {
  //   if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  //     navigator.mediaDevices
  //       .getUserMedia({ video: true }) // Request access to the webcam
  //       .then((stream) => {
  //         // Set the video stream as the source for the video element
  //         videoRef.current.srcObject = stream;
  //       })
  //       .catch((error) => {
  //         console.error('Error accessing the webcam:', error);
  //       });
  //   }
  // }, []);

  return (
    <>
      <Header />
      <div className="cam-parent">
        <div className="cam-major">
          {cam.map((cam) => (
            <Link
              to={`/cam/${cam.id}`}
              key={cam.id}
              onMouseEnter={() => handleMouseEnter(cam.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                {hoveredItemId === cam.id && <p>{cam.id}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Cam;
