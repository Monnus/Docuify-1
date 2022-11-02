// import React from "react";
import React, { Component } from 'react';
import happy_employees from '../../../src/assets/images/Happy-employees.jpeg';
import './contactus.css';


export default class Contact extends Component {


    render(){


    return(
        <div>
        <div className='aboutUs'>
    
            <div className='employees'>
            <img src={happy_employees} alt='happy_employees' className='happy_employees'/>
    
            </div>
            <div className='story_1'>
                <h6>CONTACT US</h6>
                <br></br>
                <h1>We’re here to help  </h1>
                <p>Let us know who you are and what you're looking for below, <br></br>
                    and we'll get your message to the right Docuify team.
    
                </p>
            </div>
        </div>
        <div className='form'>
            <div className='form_heading'>
              <h1>What can we <br></br> help you with?</h1>
    
            </div>
    
            <div className='form_table'>
    <div className='check'>
            <form action="https://formspree.io/f/moqrdybl" method="post"
             style={{display:"flex",flexDirection:"column",lineHeight:"1rem",alignItems:"center"}}>
              <div>

              <label style={{color:"white",fontSize:"1rem",fontWeight:"500",}}>Full Name</label><br/>
              <input placeholder='Full Name' style={{width:"30rem",borderRadius:"10px",height:"3rem"}}/>

              </div>
<br/>
<div>
              <label style={{color:"white",fontSize:"1rem",fontWeight:"500",}}>E-mail</label><br></br>
              <input placeholder='E-mail'style={{width:"30rem",borderRadius:"10px",height:"3rem"}}/>

</div>
              <br/>
<div>

            <label style={{color:"white",fontSize:"1rem",fontWeight:"500",}} className='Label'>Phone</label><br></br>
              <input className='Placeholder' placeholder='Phone' style={{width:"30rem",borderRadius:"10px",height:"3rem"}}/>
</div>
              <br/>
      <div>

              <label style={{color:"white",fontSize:"1rem",fontWeight:"500",}} className='job'>Job Title</label><br/>
              <input className='Input' placeholder='Job Title' style={{width:"30rem",borderRadius:"10px",height:"3rem"}}/>
      </div>
<br/>
              <div>

              <label style={{color:"white",fontSize:"1rem",fontWeight:"500",}} className='job'>Company</label><br></br>
              <input className='Input'  placeholder='Company' style={{width:"30rem",borderRadius:"10px",height:"3rem"}}/>
              </div>
              <br/>
        <div>

            <label style={{color:"white",fontSize:"1rem",fontWeight:"500",}} className='Label'>Message</label><br></br>
              <input className='type' placeholder='Type your message...' style={{width:"30rem",borderRadius:"10px",height:"3rem"}}/>
        </div>

            <button className='send' type="submit">Send message</button>
         
    
            
          </form>
            </div>
            
        </div>
        </div>
        </div>
    )
}
}

/*

<div className='form_heading'>
              <h1>What can we <br></br> help you with?</h1>
    
            </div>
    
            <div className='form_table'>
    <div className='check'>
            <form action="https://formspree.io/f/moqrdybl" method="post">
            <div className='properly'>
           
            </div>
            
            <div>
            <div className='double-imp' style={{display:"flex",flexDirection:"column"}}>
              <div>
              <label>Full Name</label><br/>
              <input placeholder='Full Name'/>
              </div>
              <div>
              <label>E-mail</label><br></br>
              <input placeholder='E-mail'/>
              </div>
              
            </div>
            <label className='Label'>Phone</label><br></br>
              <input className='Placeholder' placeholder='Phone'/>
    
            </div>
            
            <div className='double-imp'>
              <div>
              <label className='job'>Job Title</label><br/>
              <input className='Input' placeholder='Job Title'/>
              </div>
              <div>
              <label className='job'>Company</label><br></br>
              <input className='Input'  placeholder='Company'/>
              </div>
              
            </div>
            <label className='Label'>Message</label><br></br>
              <input className='type' placeholder='Type your message...'/>
            <button className='send' type="submit">Send message</button>
          </form>
            </div>
            
        </div>
        </div>

*/