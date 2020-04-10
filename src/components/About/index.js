/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";
import myFace from "./Vadim.jpg"
function About() {

    return (
        <div className="row r2">
            <div className="col-12 bg3 col-md-12 col-lg-8">
              
                <div className="card w-100 mt-3 mt-md-4" >
                    <div className="card-body ">
                       <h3 className="card-title">About Me</h3>
                      <nav className="nav  w-100 h-100 justify-content-center">
                        <a className="nav-link align-self-center br" href="MyResume.pdf" target="_blank" >Resume</a>
                        <a rel="noopener noreferrer" className="nav-link align-self-center br" href="https://github.com/vadimsusername" target="_blank">My Github</a>
                        <a rel="noopener noreferrer" className="nav-link align-self-center" href="https://www.linkedin.com/in/vadim-buryakovsky-176729101/" target="_blank">My Linkedin</a>
                      </nav>
                       <hr />
                    
                      <img src={myFace} className="img-fluid float-none float-md-left mr-md-3"  alt="Vadim's Profile Picture" id="about-image" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia commodi nemo voluptatum natus necessitatibus nobis quidem consequuntur, cumque eos, dolore ea, qui harum tempore amet laborum. Reprehenderit atque rem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non sunt aliquam totam atque, optio dolor odit incidunt culpa assumenda consequuntur! Itaque consequatur laboriosam tempore placeat culpa voluptas, vel optio.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae enim in minima consequatur aut perferendis repudiandae nam reprehenderit et sapiente similique pariatur, eos necessitatibus ad distinctio. Sed, illo a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, distinctio blanditiis eaque perspiciatis ad ea. Temporibus tenetur alias rerum dolorum. Architecto dolores ut, adipisci quas nemo temporibus consequatur rem reprehenderit?</p>
                    </div>
                </div>
            </div>
            <div className="col bg3">

            </div>

        </div>
    );
}

export default About;