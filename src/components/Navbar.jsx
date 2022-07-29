import { useEffect } from "react";

import { scrolledNavbar } from "../helpers";
import Logo from "./Logo";

function Navbar() {
  useEffect(() => {
    scrolledNavbar("navbar", "navbar-scrolled");
  }, []);

  return (
    <nav className="navbar ">
      <div className="container navbar__container">
        <Logo />
      </div>
    </nav>
  );
}

export default Navbar;
