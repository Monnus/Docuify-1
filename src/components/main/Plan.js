// import React from "react";
import React, { Component } from 'react';
import './plan.css'
// import plan from '../../../src/assets/images/craft-financial-business-plan-1.jpeg'



import plan from '../../../src/assets/images/craft-financial-business-plan-1.jpeg'
import '@blueprintjs/core/lib/css/blueprint.css';
import { Tabs, Tab } from "@blueprintjs/core";
import {AiFillCheckCircle} from 'react-icons/ai'
import { DIVIDER } from '@blueprintjs/core/lib/esm/common/classes';


export default class Plan extends Component {


    render(){


    return(
            <div>
                    <div className='Plan'>
                
                    <div className='scale'>
                    <img src={plan} alt='plan' className='Plans'/>
                
                    </div>
                    <div className='target'>
                        <h6>OUR PLANS</h6>
                        <br></br>
                        <h1>Pricing that scales to <br></br>fit your needs</h1>
                        <p>We are the company that provides a largest <br></br>verifying of documents</p>
                        <button className='price_button'>Get Started</button>
                    </div>
                </div>
                <div className='heading_plan'>
                <h1>Choose a plan that works for you</h1>
                <p>
                By subscribing to a Docuify plan, you agree to the <a href='/'> Docuify Terms of Service. </a> 
                Note: The <a href='/'> Docuify Terms of Service </a>  <br></br>
                describes how data is handled in this service.
                </p>
            </div>


                {/* <TabsPlan/> */}

                {/* Tabsplan start here */}

            <div>
                <div className='boxes'>
                    <div className='space_boxes1'>
                        <h1>BASIC</h1>
                        <h2>R80.00</h2>
                        <p>Per Month</p>
                        <hr/>
                        <div className='features'>
                            <AiFillCheckCircle className='check_circle'/><p>All features</p>
                        </div>
                        <div className='features'>
                            <AiFillCheckCircle className='check_circle' /><p>All features</p>
                        </div>
                        <div className='features'>
                            <AiFillCheckCircle className='check_circle'/><p>All features</p>
                        </div>
                        <button  className='select_plan'>Get started</button>
                    </div>
                    <div className='space_boxes1'>
                        <h1>STANDARD</h1>
                        <h2>R280.00</h2>
                        <p>Per Month</p>
                        <hr/>
                        <div className='features'>
                            <AiFillCheckCircle className='check_circle'/><p>All features</p>
                        </div>
                        <div className='features'>
                            <AiFillCheckCircle className='check_circle'/><p>All features</p>
                        </div>
                        <div className='features' >
                            <AiFillCheckCircle className='check_circle'/><p>All features</p>
                        </div>
                        <button  className='select_plan'>Get started</button>
                    </div>
                    <div className='space_boxes1'>
                        <h1>PREMIUM</h1>
                        <h2>R400.00</h2>
                        <p>Per Month</p>
                        <hr/>
                        <div className='features'>
                            <AiFillCheckCircle className='check_circle'/><p>All features</p>
                        </div>
                        <div className='features'>
                            <AiFillCheckCircle className='check_circle'/><p>All features</p>
                        </div>
                        <div className='features'>
                            <AiFillCheckCircle className='check_circle'/><p>All features</p>
                        </div>
                        <button className='select_plan'>Get started</button>
                    </div>
                    </div>
                </div>

                
        </div>
    )
}
}