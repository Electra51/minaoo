import React from "react";
import "./footer.css";
import { footerData } from "../../../Components/Common/data";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {footerData.map((col, colIndex) => (
          <div key={colIndex} className="footer-col">
            <h4>{col.title}</h4>
            {col.links && (
              <ul>
                {col.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            )}
            {col.socialLinks && (
              <div className="social-links">
                {col.socialLinks.map((socialLink, socialIndex) => (
                  <a key={socialIndex} href={socialLink.href}>
                    {socialLink.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
