import { useState, useRef} from 'react';
import { meal } from "../../constants";
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.css';
//import { useRef } from "react";

const Intro = () => {
  const vidref = useRef();
  const [playVideo, setPlayVideo] = useState(false)
  const handeClick = () => {
    setPlayVideo(prevSetPlayVideo => !prevSetPlayVideo)
    playVideo ? vidref.current.pause() : vidref.current.play()
  }

  return (
    <div className="app__video app__wrapper ">
      <video 
      src={meal}
      ref={vidref}
      loop
      controls={false}
      muted 
      />

      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center" onClick={handeClick}>
          {playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill  color="#fff" fontSize={30} />}
        </div>
      </div>
    </div>
)};

export default Intro;
