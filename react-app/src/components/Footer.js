import React from 'react';
import "../components/stylesheets/footer.css";
import "../components/stylesheets/index.css";

const NavBar = () => {
  return (
    <footer className="footer">
      <div className="footer-dev">
        <div className="footer-dev-name"> Developed by : Lisa Noor</div>
        <div><a className="footer-dev-link" href="https://github.com/Skulllady" target="_blank" >github</a></div>
        <div><a className="footer-dev-link" href="https://www.linkedin.com/in/lisa-noor-hoque-976120208/" target="_blank">linkedin</a></div>
      </div>
    </footer >
  );
}

export default NavBar;
