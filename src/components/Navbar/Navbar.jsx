import React from 'react';
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu} from "react-icons/md";
import './Navbar.css';
import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  console.log(toggleMenu)
  return (
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
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#about">About</a></li>
              <li className="p__opensans"><a href="#Menu">Menu</a></li>
              <li className="p__opensans"><a href="#Awards">Awards</a></li>
              <li className="p__opensans"><a href="#Contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar; 
