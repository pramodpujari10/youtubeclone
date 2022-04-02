import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import './header.css'
import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import  {MdCircleNotifications,MdApps} from "react-icons/md"



function Header({ handleToggleSidebar }) {
  const [input,setInput]=useState('')

  const history = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    history(`/search/${input}`);

  }



  return (
    <div className="header ">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=" Logo"
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdCircleNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Header
