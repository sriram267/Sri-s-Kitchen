import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our mission is to connect food lovers with the best dining experiences in town. Our passion for great food and exceptional service has made us a trusted resource for foodies everywhere.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Here, we are passionate about providing our customers with unforgettable dining experiences. Join us on a journey of taste and explore the culinary wonders our city has to offer.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;






// Our mission is to connect food lovers with the best dining experiences in town. 
//         Since our inception, we have been dedicated to exploring the culinary scene and sharing our knowledge with our customers. 
//         Our passion for great food and exceptional service has made us a trusted resource for foodies everywhere.







// Here, we are passionate about providing our customers with unforgettable dining experiences.
 
//          Join us on a journey of taste and explore the culinary wonders our city has to offer.