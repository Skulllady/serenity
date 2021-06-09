import React from 'react';
import "../components/stylesheets/footer.css";
import "../components/stylesheets/index.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const NavBar = () => {
  return (
    <footer className="footer">
      <div className="footer-dev">
        <div className="footer-dev-name"> Developed by : Lisa Noor</div>
        <div><a className="footer-dev-link" href="https://github.com/Skulllady" target="_blank" ><GitHubIcon /></a></div>
        <div><a className="footer-dev-link" href="https://www.linkedin.com/in/lisa-noor-hoque-976120208/" target="_blank"><LinkedInIcon /></a></div>
      </div>
    </footer >
  );
}

export default NavBar;
