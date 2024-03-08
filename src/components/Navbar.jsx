import React, { useState } from 'react';
import './Navbar.css';
import { GrMenu } from "react-icons/gr";
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">
          <p className='logo-txt'>REACT.</p>
        </div>
        
        <div className="na-ul">
          <motion.li
        
          
          >About</motion.li>
          <li>Home</li>
          <li>Contact</li>
          <button
            className='getin-btn'
           
            
            >
            Get Started
          </button>

          <motion.div
            className="menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}>
            <GrMenu />
          </motion.div>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="show"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            > 
              <div style = {{fontSize: "22px", color:"#00df9a", padding:"20px" ,fontWeight:"500"}}>REACT.</div>
              <div className="pro">Home</div>
              <div className="pro">Contact</div>
              <div className="pro">About</div>
              <div className="pro">Process</div>
              <div className="pro">Portfolio</div>
              <motion.div
                className="close"
                onClick={toggleMenu}>
                <IoClose />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;
