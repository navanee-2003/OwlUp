import React from "react";
import "./Navbar.css";
import CameraIndoorRoundedIcon from "@mui/icons-material/CameraIndoorRounded";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Badge from "@mui/material/Badge";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar-parent">
      <div className="navbar-major">
        <div className="icons">
          <Link to="/cam">
            <CameraIndoorRoundedIcon
              style={{ width: "100%", height: "100%" }}
              title="Home"
            />
          </Link>
          <Link to="/add-cam">
          <VideoCallRoundedIcon style={{ width: "100%", height: "100%" }} />
          </Link>
          <Link to="/auth">
          <PersonRoundedIcon style={{ width: "100%", height: "100%" }} />
          </Link>
          <Link to="/alerts">
          <Badge
            badgeContent={1}
            color="warning"
            style={{ width: "100%", height: "100%"}}
          >
            <EmailRoundedIcon style={{ width: "100%", height: "100%" }} />
          </Badge>
          </Link>
          <Link to="/bug-report">
          <ReportGmailerrorredRoundedIcon
            style={{ width: "100%", height: "100%" }}
          />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
