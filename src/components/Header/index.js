/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Header() {
    const location = useLocation();
    return (
        <>
        <div className="row bg1">
            <div className="col-12 pl-0 pr-0 pl-md-3 pr-md-3 col-md-4  "> 
                               
                    <div className="h3 bg2 pt-3 pb-3 mb-0 text-center">
                        Vadim Buryakovsky
                    </div>
                       
            </div>
            <div className="col-12 col-md-8 ">
                <nav className="nav  w-100 h-100 justify-content-center justify-content-md-end">
                    {/* Might need to use nav-item*/}
                    <Link to="/" className="nav-link align-self-center br"/* className={(location.pathname === "/" || location.pathname === "/about") ? "nav-link active" : "nav-link"} */>
                        About
                    </Link>
                    <Link to="/portfolio" className="nav-link align-self-center br"/* className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} */>
                        Portfolio
                    </Link>
                    <Link to="/contact" class="nav-link align-self-center"/* className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} */>
                        Contact
                    </Link>
                    {/* <a class="nav-link align-self-center br" href="#">About</a>
                    <a class="nav-link align-self-center br" href="portfolio.html" target="_blank">Portfolio</a>
                    <a class="nav-link align-self-center" href="contact.html" target="_blank">Contact</a> */}
                </nav>
            </div>
        </div>
        </>
    );
}

export default Header;