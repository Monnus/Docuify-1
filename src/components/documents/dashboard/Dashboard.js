
import React,{useState, useEffect}from 'react'
// import Navbar from '../../components/navbar/Navbar'
import {UplaodToBlockchainBoxes} from "../../upload/uplaodload"
import "./dashboard.css";
// import IconUser from "../../../assets/imagess/userIconImage.svg";
// import welcomeIMG from "../../../assets/imagess/tourist-welcome.svg";
// import wave from "../../../assets/imagess/wave.svg";
// import CalenderBox from "../../calander/calenderBox";
// import contactUs from "../../../assets/images/address-card-solid.svg";
// import verify from "../../assets/images/certificate-solid.svg";
// import profile from "../../../assets/images/user-solid.svg";
// import settings from "../../../assets/images/cog-solid.svg";
// import search from "../../../assets/images/search-solid.svg";
// import homefrom from "../../../assets/images/home-solid.svg";
// import info  from "../../../assets/images/info-circle-solid.svg";

export default class componentName extends React.Component {

constructor(props){
  super(props);
  this.state={
todosCalanders:[[
      {time:"10:00",title:"Dribble shot",description:"facebook Brand"},
      {time:"13:20",title:"Design",description:"Task Managment"}],
      [{time:"10:00",title:"UX Research",description:"Sleep App"},
      {time:"13:20",title:"Design",description:"Task Managment"},
      {time:"10:00",title:"dribble Shot",description:"Meet up"}],
      [{time:"10:00",title:"Dribble shot",description:"Meet up"},
      {time:"11:00",title:"design",description:"Mobile App"}
    ]]
  }
}



  
handleCalander=(minusDays=0)=>{
  const selectMonth = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

const date=new Date();
//get day of the month
const day=date.getDate();
const week=date.getDay();
const year=date.getFullYear();
const month=selectMonth[date.getMonth()];
return ` ${month} ${(day-minusDays)}, ${year}`;
}





render(){


return (

  <div className='pageGrid'>
      <div className='item1' >
      <div style={{textAlign:"center",alignSelf:"center"}}>

  <div className='Icon-Image'></div>
      </div>
                <div style={{marginTop:"2rem",textAlign:"center"}}>
            <div className="Profile-Image">
            <img src={require("../../../assets/imagess/profileDisplayIMG.jpg")} 
            style={{borderRadius:"100%",width:"5rem",height:"5rem",boxShadow:"2px 2px 12px gray"}}/>
          <h4 style={{fontWeight:"900"}}>Saraha Conners</h4>
          <h5>Saraha@gmail.com</h5>
            </div>

                </div>


<div className='Link'>
<nav style={{marginTop:"5rem"}}>
<ul>
<li><a href='/' style={{textDecoration:"none",width:"100%",color:"rgba(121,50,128)"}}><img src={homefrom} style={{ color:"rgba(121,50,128)",width:"1.5rem",height:"1.5rem"}} /><span>Home</span></a></li>
<br/>
<li><a href='/about'style={{textDecoration:"none",width:"100%",color:"rgba(121,50,128)"}}><img src={info} style={{ color:"rgba(121,50,128)",width:"1.5rem",height:"1.5rem"}} /><span>About </span></a></li>
<br/>
<li><a href='/profile' style={{textDecoration:"none",width:"100%",color:"rgba(121,50,128)"}}><img src={profile} style={{ color:"rgba(121,50,128)",width:"1.5rem",height:"1.5rem"}} /><span>Profile</span></a></li>
<br/>
<li><a href='/contactus' style={{textDecoration:"none",width:"100%",color:"rgba(121,50,128)"}}><img src={contactUs} style={{ color:"rgba(121,50,128)",width:"1.5rem",height:"1.5rem"}} /><span>contact Us</span></a></li>
<br/>
<li><a href='/verify'style={{textDecoration:"none",width:"100%",color:"rgba(121,50,128)"}}><img src={verify} style={{ color:"rgba(121,50,128)",width:"1.5rem",height:"1.5rem"}} /><span>Verify</span></a></li>
<br/>
<li><a href='/settings' style={{textDecoration:"none",width:"100%",color:"rgba(121,50,128)"}}><img src={settings} style={{ color:"rgba(121,50,128)",width:"1.5rem",height:"1.5rem"}} /><span>settings</span></a></li>

</ul>
</nav>


<div className='grayLine'></div>
</div>
    </div>
        {/* ====================================itme2=============== */}
        <div className='item2'>

<div style={{display:"flex"}}>


<div style={{flexGrow:"2",color:"rgba(121,50,128)"}}>
<h3>Hello,Sara</h3>
<h6>Today is Monday, 20 October 2022</h6>
</div>
<div style={{display:"flex",flexGrow:"3",padding:"0 0",textAlign:"center"}}>
<input type="text" style={{width:"25rem",height:"2rem",border:"none",borderRadius:"0.9rem"}}/>
<div style={{height:"2.5rem",width:"2.5rem",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",
backgroundColor:"#F7F5F2",color:"rgba(121,50,128)",borderRadius:"0.5rem"}}>

<img src={search} style={{color:"rgba(121,50,128)",width:"1.5rem",height:"1.5rem"}} />
</div>


<button 
style={{width:"13rem",cursor:"pointer",height:"2.5rem",
fontSize:"1.1rem",backgroundColor:"black",borderRadius:"0.5rem",
marginRight:"1rem", color:"white"}} type="button" > 
<label htmlFor='filebtn'>Add New Project</label>

</button>

</div>
<div>
{/* empty div for space dont remove*/}
</div>
</div>

{/*  div for boxes*/}

<div>
<br/>
<UplaodToBlockchainBoxes/>
</div>
  

  </div>
    
  <div className='item3'>
        <div className="task-for-today" style={{width:"20rem"}}>
  {/* task to do*/}
<div className="listTask">
  <div className='innerLInelistTask' style={{marginRight:"15px",backgroundColor:"#FE7541"}}></div>
  <div  style={{marginRight:"70px",paddingTop:"15px",lineHeight:"5px"}}>
    <h3>Mobile App</h3>
    <br/>
    <h6>Prepare Figma file</h6>
  </div>
  <div style={{margin:"5px"}}>
            {/* <Radio value="Hello World" name="radio-buttons" /> */}
            </div>
</div>
{/* task to do*/}
  {/* task to do*/}
  <div className="listTask">
  <div className='innerLInelistTask' style={{marginRight:"15px",backgroundColor:"#793280"}}></div>
  <div  style={{marginRight:"70px",paddingTop:"15px",lineHeight:"5px"}}>
    <h3>UX wireframes</h3>
    <br/>
    <h6>Design UX wireframes</h6>
  </div>
  <div style={{margin:"5px"}}>
            {/* <Radio value="Hello World" name="radio-buttons" /> */}
            </div>
</div>
{/* task to do*/}
  {/* task to do*/}
  <div className="listTask"> 
  <div className='innerLInelistTask' style={{marginRight:"15px",backgroundColor:"#82D1D9"}}></div>
  <div  style={{marginRight:"70px",paddingTop:"15px",lineHeight:"5px"}}>
    <h3>Mobile App</h3>
    <br/>
    <h6>Research</h6>
  </div>
  <div style={{margin:"5px"}}>
            {/* <Radio value="Hello World" name="radio-buttons" /> */}
            </div> 
</div>
{/* task to do*/}
        </div>

    <div className="Statistics" style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column",width:"25rem",padding:"20px 10px 0 10px"}}>
   <h2 style={{fontSize:"1.5rem",fontWeight: "500",color:"#793280",marginBottom:"1.5rem"}}>Statistics</h2>
  <div className='statistics-boxes-container'>
<div className='statistics-boxes'>
  <h2>28 h</h2>
  <h5>Tracked time</h5>
</div>
<div className='statistics-boxes'>
<h2>18 h</h2>
  <h5>Finished tasks</h5>
</div>
<div className='statistics-boxes addborderLines' style={{background:"white"}}>
{/*<AddCircleIcon/> */}
  <h5>new <span>  </span> widget</h5>
</div>

     </div>
      
<div className='welcomeBlock'>
<div style={{display:"flex",flexDirection:"column", justifyContent:"space-around",padding:"5px"}}>
<h2>$9.99</h2>
<h3>Pro Plan</h3>
<p>More productivity with premium!</p>
  </div>
  <div style={{width:"60%",height:"100%",backgroundImage:`url(${wave})`,
  backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"cover", transform:" scaleX(-1)"}}>
<img src={welcomeIMG} alt="wellcomImage" style={{width:"15rem",height:"100%", transform: "scaleX(-1)"}}/>
  </div>
</div>
        </div>
      </div>


      
      <div className='item4'>
        <br/>
  <div style={{marginLeft:"30px"}}><h3>Calander</h3></div>
      <div className="calander">

        <CalenderBox handleCalander={this.handleCalander} minusDays={2} todosCalanders={this.state.todosCalanders[0]}/>
        <CalenderBox handleCalander={this.handleCalander} todosCalanders={this.state.todosCalanders[1]} minusDays={1}/>
        <CalenderBox handleCalander={this.handleCalander} todosCalanders={this.state.todosCalanders[2]}/>
      </div>
    </div>
  </div>

  )
}
}