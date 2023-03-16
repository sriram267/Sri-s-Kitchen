import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu} from "react-icons/md";
import './Navbar.css';
import images from "../../constants/images";

const Navbar = () => (
  <nav className="app__navbar">
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="logo" ></img>
    </div>

    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#Menu">Menu</a></li>
      <li className="p__opensans"><a href="#Awards">Awards</a></li>
      <li className="p__opensans"><a href="#Contact">Contact</a></li>
    </ul>

    <div className="app__navbar-login">
    <button className="p__opensans">Log In / Register</button>
    <button className="p__opensans">Book Table</button>
    </div>

  </nav>
);

export default Navbar; 
