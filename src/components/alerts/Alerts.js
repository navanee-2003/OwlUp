import React, { useEffect, useState } from "react";
import "./Alerts.css";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import axios from "axios";

function Alerts() {
  const [rows, setRows] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/alerts');
      setRows(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  },[])


  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 190,
    },
    {
      field: "incident",
      headerName: "INCIDENT",
      width: 190,
    },
    {
      field: "level",
      headerName: "LEVEL",
      width: 190,
    },
    {
      field: "camera_id",
      headerName: "CAMERA ID",
      width: 190,
    },
    {
      field: "latitude",
      headerName: "LATITUDE",
      description: "This column has a value getter and is not sortable.",
      width: 190,
    },
    {
      field: "longitude",
      headerName: "LONGITUDE",
      description: "This column has a value getter and is not sortable.",
      width: 190,
    },
    {
      field: "time",
      headerName: "TIME",
      description: "This column has a value getter and is not sortable.",
      width: 190,
    },
    {
      field: "address",
      headerName: "ADDRESS",
      description: "This column has a value getter and is not sortable.",
      width: 190,
    },
  ];

  return (
    <>
      <Header />
      <div className="alerts-parent">
        <div className="alerts-major">
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 9,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Alerts;
