import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom"
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../components/Search';

export default function Home() {
  return (
    <div className='home'>
        <div className="home__header">
          <div className="home__header--left">
            <Link to="/about">About</Link>
            <Link to="/store">Store</Link>
          </div>
          <div className="home__header--right">
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
            <AppsIcon className="grid__icon" />
            <AccountCircleIcon className="account__icon" />
          </div>
        </div>
        <div className="home__body">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" 
            alt=""
            className='google__img' 
          />
          <div className="home__input--container">
            <Search hideButtons={false}/>
          </div>
        </div>
    </div>
  )
}
