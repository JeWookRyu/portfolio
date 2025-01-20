import React from 'react'
import { FcEngineering } from "react-icons/fc";
const Header = () => {
  return (
    <div className="title-container">
       <div className="title-profile">
           <img src={process.env.PUBLIC_URL + "/images/jewook.jpg"} alt="profile-img" className="profile-img"/>
       </div>
       <h1 className="title">
           <div className="title-icon">
              <FcEngineering className="d-block" />
           </div>    
           <div className="title-text">
             <a href="https://github.com/JeWookRyu">류 제 욱</a>
           </div> 
       </h1>  
      
    </div>  
  )
}

export default Header

