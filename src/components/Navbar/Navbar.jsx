import React from 'react';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans"><Link to="/aboutUs">About</Link></li>
        <li className="p__opensans"><Link to="/specialMenu">Menu</Link></li>
        <li className="p__opensans"><Link to="/laurels">Awards</Link></li>
        <li className="p__opensans"><Link to="/findUs">Contact</Link></li>
      </ul>
      <div className="app__navbar-login">
        <button>Log In / Registration</button>
      <div />
        <button>Book Table</button> 
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu 
          color="fff" 
          fontSize={27} 
          onClick={() => setToggleMenu(true)}
          cursor="pointer" />
        
        {toggleMenu && (
          <div className="app__navbar-smallscreen-overlay flex__center side-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}  />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><Link to="/">Home</Link></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><Link to="/aboutUs">About</Link></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><Link to="/specialMenu">Menu</Link></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><Link to="/laurels">Awards</Link></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><Link to="/findUs">Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar; 
