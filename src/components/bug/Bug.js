import React from "react";
import "./Bug.css";
import { Button } from "antd";
function Bug() {
  return (
    <div className="bug-parent">
      <div className="bug-major">
        <div className="img"></div>
        <div className="container">
          <div className="logo"></div>
          <p>
            SORRY FOR THE INCONVEINCE, PLEASE DESCRIBE THE PROBLEM IN DETAIL!
          </p>
          <div className="credentials">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <div className="btns">
              <Button type="primary" danger>
                REPORT BUG!
              </Button>
            </div>
            {/* <Link to={"/"}>FORGOT PASSWORD?</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bug;
