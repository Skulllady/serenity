import React from 'react';
import splash_video from '../images/splash_page/relaxing_fishingboat_on_water.mp4';
import AuthNav from './auth/AuthNav';
import Footer from './Footer';
import "./stylesheets/index.css";
import "./stylesheets/splash.css";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import UpdateTwoToneIcon from '@material-ui/icons/UpdateTwoTone';
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';
import UpdateIcon from '@material-ui/icons/Update';

const SplashContainer = ({ children }) => {
  return (
    <>
      <AuthNav />
      <div className="splash">
        <video id="video" loop="true" autoPlay="autoplay" muted>
          <source src={splash_video} type="video/mp4"></source>
        </video>
        <div id="splash-contents">
          {children}
        </div>
        <div>
          <TrendingUpIcon />
          <UpdateTwoToneIcon />
          <MonetizationOnTwoToneIcon />
          <UpdateIcon />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SplashContainer;
