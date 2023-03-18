import React, { useRef } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import './Gallery.css';


const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {

  const scrollRef =useRef(null);

  const scroll = (direction) => {
  const { current } = scrollRef;
    (direction === "left"? current.scrollLeft -= 300 : current.scrollLeft += 300 )
  }

  return (
    <div className="app__gallery flex__center">
     <div className="app__gallery-content">
      <SubHeading 
      title="Instagram"/>
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{color:"#AAA" , marginTop:"2rem"}}>Explore our visually stunning photo gallery and discover the essence of our brand through captivating imagery. It provides an engaging visual experience for users to explore and discover the brand's products or services.</p>
      <button className="custom__button">View More</button>
     </div>
     <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
       {galleryImages.map((image, index) => (
        <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
          <img src={image} alt="" />
          <BsInstagram className="gallery__image-icon" />
        </div>
       ))}
      </div>
      <div className="app__gallery-images_arrows">
       <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll("left")}/>
       <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll("right")}/>
      </div>
     </div>
    </div>
  )
};

export default Gallery;
