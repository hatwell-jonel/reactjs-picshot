import React from "react";
import { BsFillCameraFill } from "react-icons/bs";
function Logo() {
  return (
    <div className="logo">
      <BsFillCameraFill className="logo__icon" />
      <p className="logo__text">picshot</p>
    </div>
  );
}

export default Logo;
