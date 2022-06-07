import React from "react";
import classes from "./Header.module.css";
import cardi from "../../assets/cardi2.jpg";


//the component for the user header
const Header = () => {
  return (
    <div>
      <div className={classes.headerContainer}>
        <div>
          <ul className={classes.links}>
            <li>Trips</li>
            <li>Recently Viewed</li>
            <li>Bookings</li>
          </ul>
        </div>

        <div className={classes.imgContainer}>
          <img src={cardi} alt="Cardi B Profile " />
        </div>
      </div>
    </div>
  );
};

export default Header;
