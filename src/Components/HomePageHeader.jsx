import React from "react";
import "./Homepage.css";
import { Link } from 'react-router-dom'


const HomePageHeader = () => {
  return (
    <div className="header">
      <div className="header-grp">
        <div className="left-content">
          <img className="header-img" src="images/Brunel.png" alt="brunel" />
        </div>
        <div className="button-grp">
          <Link to='/form'><button className="button-1">Get Projects</button></Link>
          <button className="button-2">Onboard Talent</button>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
