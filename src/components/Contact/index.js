/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

function Contact() {

    return (
        <div className="row r2">
            <div className="col-12 bg3 col-md-12 col-lg-8">
                <div className="card w-100 mt-3 mt-md-4" >
                    <div className="card-body ">
                      <h3 className="card-title">Contact</h3>
                      <nav className="nav  w-100 h-100 justify-content-center">
                        <a rel="noopener noreferrer" className="nav-link align-self-center br" href="mailto:vadimburyakovsky@yahoo.com" target="_blank">vadimburyakovsky@yahoo.com</a>
                        <a className="nav-link align-self-center br" href="#" >267-274-7406</a>
                        <a rel="noopener noreferrer" className="nav-link align-self-center br" href="https://github.com/vadimsusername" target="_blank">My Github</a>
                        <a rel="noopener noreferrer" className="nav-link align-self-center" href="https://www.linkedin.com/in/vadim-buryakovsky-176729101/" target="_blank">My Linkedin</a>
                      </nav>
                      <hr />

                      <form>
                          <div className="form-group">
                              <label htmlFor="nameInput">Name</label>
                              <input className="form-control" type="text" id="nameInput" placeholder="Joe John" />
                          </div>
                          <div className="form-group">
                              <label htmlFor="emailInput">Email</label>
                              <input type="email" className="form-control" id="emailInput" placeholder="fakemail@example.com" />
                          </div>
                          <div className="form-group">
                              <label htmlFor="messageInput">Message</label>
                              <br />
                              <textarea className="form-control" rows="5" id="messageInput"></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">Submit</button>

                      </form>
                      
                    </div>
                </div>
            </div>
            <div className="col bg3">
    
            </div>
    
        </div>
    );
}

export default Contact;