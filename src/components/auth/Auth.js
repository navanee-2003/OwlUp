import React, { useEffect, useState } from "react";
import "./Auth.css";
import { Button, Space } from "antd";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import axios from "axios";

function Auth() {

  const [bool, setBool] = useState(false);
  const[rows, setRows] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/auth');
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
      headerName: "AUTHORITY ID",
      width: 300,
    },
    {
      field: "name",
      headerName: "NAME",
      width: 300,
      editable: bool,
    },
    {
      field: "auth",
      headerName: "AUTHORITY TYPE",
      width: 300,
      editable: bool,
    },
    {
      field: "location",
      headerName: "LOACTION",
      width: 300,
      editable: bool,
    },
    {
      field: "remove",
      headerName: "",
      width: 150,
      editable: bool,
      renderCell: (params) => {
        const handleClick = () => {
          // Handle the click event here
          console.log("Clicked on age:", params.value);
        };

        return (
          <Button type="primary" danger className="btn">
            REMOVE
          </Button>
        );
      },
    },
    {
      field: "edit",
      headerName: "",
      width: 150,
      renderCell: (params) => {
        const handleEdit = () => {
          setBool(!bool);
        };

        return (
          <Button type="primary" danger className="btn" onClick={handleEdit}>
            EDIT
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Header />
      <div className="auth-parent">
        <div className="auth-major">
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

export default Auth;
