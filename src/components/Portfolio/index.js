/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";
import sharkfinImg from "./img/sharkFin2.jpg";
import covid19Img from "./img/covid19_screenshot2.jpg";
import dayPlannerImg from "./img/dayplanner.jpg";
import weatherImg from "./img/weather2.jpg";
import singularity from "./img/singularity.png"
 
function Portfolio() {

    return (
        <div className="row r2">
            <div className="col-12 bg3" >
                <div className="card w-100 mt-3 mt-md-4" >
                    <div className="card-body ">
                      <h3 className="card-title">Portfolio</h3>
                      <hr />
                      <div className="container">
                          <div className="row">
                              <div className="col-12 col-md-6 col-xl-4 ">
                                  <div className="card mb-4">    
                                    <a href="https://vadimsusername.github.io/sharkFin/" target="_blank">                                
                                     <img className="card-img" src={sharkfinImg} alt="Card image cap" />
                                     <div className="card-img-overlay image-overlay">
                                        <h4 className="card-text text-center">
                                            sharkFin
                                        </h4>
                                        <h5 className="card-text text-center">
                                            <a href="https://github.com/vadimsusername/sharkFin" target="_blank">Github</a>
                                        </h5>
                                     </div>
                                     </a>
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-xl-4">
                                <div className="card mb-4"> 
                                   <a href="https://covid-19-tracking-app.herokuapp.com/" target="_blank">                                                                                    
                                    <img className="card-img" src={covid19Img} alt="Card image cap" />
                                    <div className="card-img-overlay image-overlay">
                                        <h4 className="card-text text-center ">
                                            Covid 19 Tracking App
                                        </h4>
                                        <h5 className="card-text text-center">
                                            <a href="https://github.com/vadimsusername/Covid-19-Tracking-App" target="_blank">Github</a>
                                        </h5>
                                    </div>
                                   </a> 
                                </div>
                              </div>
                              <div className="col-12 col-md-6 col-xl-4">
                                  <div className="card mb-4">     
                                    <a href="https://vadimsusername.github.io/weatherdashboard/" target="_blank">                              
                                    <img className="card-img" src={weatherImg} alt="Card image cap" />
                                    <div className="card-img-overlay image-overlay">
                                        <h4 className="card-text text-center ">
                                            Weather Dashboard
                                        </h4>
                                        <h5 className="card-text text-center">
                                            <a href="https://github.com/vadimsusername/dayscheduler" target="_blank">Github</a>
                                        </h5>
                                    </div>
                                    </a>
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-xl-4">
                                  <div className="card mb-4">     
                                    <a href="https://vadimsusername.github.io/dayscheduler/" target="_blank">                              
                                    <img className="card-img" src={dayPlannerImg} alt="Card image cap" />
                                    <div className="card-img-overlay image-overlay">
                                        <h4 className="card-text text-center ">
                                            Day Scheduler
                                        </h4>
                                        <h5 className="card-text text-center">
                                            <a href="https://github.com/vadimsusername/dayscheduler" target="_blank">Github</a>
                                        </h5>
                                    </div>
                                    </a>
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-xl-4 ">
                                <div className="card mb-4"> 
                                  <a href="https://singularitytcg.herokuapp.com/" target="_blank">                                  
                                    <img className="card-img" src={singularity} alt="Card image cap" /> 
                                    <div className="card-img-overlay image-overlay">
                                        <h4 className="card-text text-center ">
                                            Singularity
                                        </h4>
                                        <h5 className="card-text text-center">
                                            <a href="https://github.com/vadimsusername/Singularity" target="_blank">Github</a>
                                        </h5>
                                        
                                    </div>
                                  </a>
                                </div>
                              </div>                        
                          </div>
                     
                      </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;