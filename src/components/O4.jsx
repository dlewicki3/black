import React, { useState } from 'react';
import './O4.css';
import Icon from "./Icon.jsx";
import Icon2 from "./Icon2.jsx";
import Icon3 from "./Icon3.jsx";
import { IoCloseSharp } from "react-icons/io5";
import {motion} from "framer-motion"
function O4() {
  const [isShown, setIsShown] = useState(false); // State variable to control visibility

  const handleClick = () => {
    setIsShown(!isShown); // Toggle visibility on button click
  };

  const handleClose = () => {
    setIsShown(false); // Hide the div on close button click
  };

  return (
    <div className="o4">
      {isShown && (
        <div className="modal-bg">
          <motion.div className="show1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.1}}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
           
        
            <div className="foricon">
            <Icon />
            </div>
            <button className="close-button" onClick={handleClose}>
            <IoCloseSharp />

            </button>
          </motion.div>
        </div>
      )}





      <div className="k4">
        <div className="card" onClick={handleClick}>
          <div className="forall">
            <div className="icon4"> <Icon2 /> </div>
            <p className="big-txt4">Partnership</p>
            <p className="price">$149</p>
            <div className="li4">1 TB Storage</div>
            <div className="li4">3 Gradient User</div>
            <div className="li4">Send up to 5 GB</div>
            <button className="button4" >
              Start Trial
            </button>
          </div>
        </div>

        <div className="card-top"  onClick={handleClick}>
          <div className="forall">
            <div className="icon4"> <Icon /> </div>
            <p className="big-txt4">Single User</p>
            <p className="price">$199</p>
            <div className="li4">500 GB Storage</div>
            <div className="li4">1 Gradient User</div>
            <div className="li4">Send up to 2 GB</div>
            <button className="button4">
              Start Trial
            </button>
          </div>
        </div>

        <div className="card" onClick={handleClick}>
          <div className="forall">
            <div className="icon4"> <Icon3 /> </div>
            <p className="big-txt4">Group Account</p>
            <p className="price">$299</p>
            <div className="li4">5 TB Storage</div>
            <div className="li4">10 Gradient User</div>
            <div className="li4">Send up to 02 GB</div>
            <button className="button4" >
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default O4;
