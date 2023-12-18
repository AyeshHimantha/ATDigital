import React from 'react'
import "./footer.css";
import logo from "../../Assets/Logo.png"

const Footer = () => {
  return (
    <div className="section footer">
        <div className="footer-top">
            <div className="container footer-left">
                <div className="footer-logo">
                    <a href="#">
                        <img src={logo} alt="At Digital Logo" />
                    </a>
                    <p className="footer-text">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                </div>  
            </div>
            <div className="container footer-right">
                <div className="footer-technologies">
                    <p className="footer-title">Our Technologies</p>
                    <ul className="footer-list">
                        <li>ReactJS</li>
                        <li>Gatsby</li>
                        <li>NextJS</li>
                        <li>NodeJS</li>
                        <li>GraphQL</li>
                        <li>Laravel</li>
                    </ul>
                </div>
                <div className="footer-services">
                    <p className="footer-title">Our Services</p>
                    <ul className="footer-list">
                        <li>Social media Marketing</li>
                        <li>Web & Mobile App Development</li>
                        <li>Data & Analytics</li>
                        <li>Google Marketing solutions</li>
                        <li>Search Engine Optimization</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <hr />
            <div className="bottom-box">
                <div className="privacy">
                    <div className="foter-text">Privacy Policy</div> 
                </div>
                <div className="terms">
                <div className="foter-text">Terms & Conditions</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
