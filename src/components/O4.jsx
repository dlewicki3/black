import React from 'react'
import './O4.css';
import Icon from "./Icon.jsx";
import Icon2 from "./Icon2.jsx";
import Icon3  from "./Icon3.jsx";

function O4() {
  return (
   <div className="o4">
    <div className="k4">
        <div className="card">
        <div className="forall">
                <div className="icon4">   <Icon2/></div>
                <p className='big-txt4'>Partnership</p>
                <p className='price'>$149</p>
                <div className='li4'>1 TB Storage</div>
                <div className='li4'>3 Gradient User</div>
                <div className='li4'>Send up to 5 GB</div>
                <button className='button4'>Start Trial</button>
            </div>
          
        </div>
        <div className="card-top">
            <div className="forall">
                <div className="icon4">   <Icon/></div>
                <p className='big-txt4'>Single User</p>
                <p className='price'>$199</p>
                <div className='li4'>500 GB Storage</div>
                <div className='li4'>1 Gradient User</div>
                <div className='li4'>Send up to 2 GB</div>
                <button className='button4'>Start Trial</button>
            </div>
        
        </div>
        <div className="card">
        <div className="forall">
                <div className="icon4">   <Icon3/></div>
                <p className='big-txt4'>Group Account</p>
                <p className='price'>$299</p>
                <div className='li4'>5 TB Storage</div>
                <div className='li4'>10 Gradient User</div>
                <div className='li4'>Send up to 02 GB</div>
                <button className='button4'>Start Trial</button>
            </div>
           
        </div>
    </div>
   </div>
  )
}

export default O4