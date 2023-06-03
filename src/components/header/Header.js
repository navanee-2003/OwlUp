import React from "react";
import "./Header.css";
import Avatar from "@mui/material/Avatar";

function Header() {
  return (
    <div className="header-parent">
      <div className="header-major">
        <div className="logo"></div>
        <Avatar alt="Remy Sharp" variant="rounded" imgProps="avatar.jpg" className="avatar"/>
      </div>
    </div>
  );
}

export default Header;
