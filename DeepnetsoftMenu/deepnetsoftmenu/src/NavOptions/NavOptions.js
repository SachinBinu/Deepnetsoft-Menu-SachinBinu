import React from 'react';
import './NavOptions.css';
import img2 from "../Frame2.png";
import img23 from '../SOFT.png';
import { Link, useNavigate } from "react-router-dom";
import AdminLogIn from '../AdminLogIn/AdminLogIn';
import FooterInfo from '../FooterInfo/FooterInfo';
import CompanyInfo from '../CompanyInfo/CompanyInfo';



function NavOptions() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand navbar-dark bg-dark MainNav px-4">
        <a className="navbar-brand fw-bold d-flex align-items-center gap-1" href="#">
          <img
            style={{ position: 'relative', zIndex: 2, top: '20px', left: '10px' }}
            src={img2}
            alt="logo"
          />
          <img
            style={{ position: 'relative', zIndex: 2, top: '40px', left: '-146px' }}
            src={img23}
            alt="logo text"
          />
        </a>
        <div className="ms-auto">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link text-white" href={<AdminLogIn />}> HOME </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-warning fw-bold" href="#"> MENU</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#"> MAKE A RESERVATION </a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link text-white" href={<AdminLogIn/>}> ADMIN PANEL </a> */}
              <Link className="nav-link text-white" to="/admin"> ADMIN PANEL </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center d-flex flex-column justify-content-center align-items-center HeroSection">
        <h1 className="fw-bold display-4 MenuHead" style={{ color: "#FFFFFF" }}>
          MENU
        </h1>
        <p className="text-light w-50">
          Explore our thoughtfully curated menu featuring a delightful mix of food, drinks, and brunch options. From hearty meals to refreshing beverages, there’s something to satisfy every craving.
        </p>
      </div>

      {/* Buttons */}
      <div className="p-2 text-center d-flex flex-row justify-content-center align-items-center gap-5 Button-bg">
        <button className="btn ButtonClick" onClick={() => navigate("/Food")}>Food</button>
        <button className="btn ButtonClick" onClick={() => navigate("/Drink")}>Drinks</button>
        <button className="btn ButtonClick" onClick={() => navigate("/Brunch")}>Brunch</button>
      </div>

     
    </div>
  );
}

export default NavOptions;
