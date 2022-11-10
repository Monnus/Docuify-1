

import React,{useState}from 'react';


import Boxes from '../onLoadBoxes/Boxes';

import "./uploadload.css";



 

class DisplayUplaodTable extends React.Component{
  

    

    constructor(props){
        super(props)
        this.state = {
            account: '',
            dstorage: null,
            files: [],
            loading: false,
            type: null,
            name: null
          }
          this.uploadFile = this.uploadFile.bind(this)
          this.captureFile = this.captureFile.bind(this)


         

        }
    render(){

        return(
      
<div style={{position: "relative",minWidth:"60rem",height:"30rem"}}>

        <h2 style={{color:"rgba(121,50,128)",width:"auto",height:"4rem",padding:"0.5rem"}}>Document Name</h2>

<table className='table'>
    {this.props.selectFile.map(file=>{
        return (
            
                <tr>
            <td style={{display:"flex",justifyContent:"space-evenly",minWidth:"auto",maxWidth:"auto"}}>
            <div className='tableLine'></div>
            <div style={{width:"100px",textAlign:"center"}}><DescriptionIcon sx={{fontSize:"4.0rem"}}/></div>
            <p>
            {file.name}
            <br/>
                Type:{file.type}
             </p>
            <button style={{height:"3rem",cursor:"pointer",borderRadius:"0.5rem",
            fontSize:"1rem",fontWeight:"500",width:"5rem",color:"white",backgroundColor:"rgb(122,56,112)"}}
       onClick={this.captureFile}  data-identifyBtn={this.props.selectFile.identifyBtn} >Deploy</button>
            </td>
              </tr>   
            
        )
    })}

</table>

</div>

  )
}
}


const WelcomeCard=()=>{
    return(
        
<div style={{height:"100%",width:"100%",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around"}}>       
<div style={{display:"flex" ,borderBottom:"2px solid rgba(128,128,128,0.4)",padding:"7px",width:"100%"
,height:"200px",backgroundColor:"white",alignItems:"center",justifyContent:"space-between",flexDirection:"row"}}>
    <div 
    style={{display:"flex",flexDirection:"column",textAlign:"start",lineHeight:"30x"}}>
<h2>Welcome Back, </h2>
<p style={{fontSize:"20px"}}>Get the power to take your BlockDoc to the next level</p>
    </div>
<img  alt="welcom" style={{width:"200px",height:"200px",alignSelf:"end",}}/>
</div>
        </div>
        
    )
};
const UplaodToBlockchainBoxes=({count,countPer})=>{
const [pending,setpending]=useState(0)
  return(

    <div style={{display:"flex",flexDirection:"row",
 justifyContent:"auto",flexWrap:"wrap",}}>
        <Boxes progressCount={countPer.verified} couuntDocs={count.verified} color={"#793280"} title={"Verified"} title2={"Documents"}/>
        <Boxes progressCount={countPer.rejected} couuntDocs={count.rejected} color={"#83D0D6"} title={"Rejected"} title2={"Documents"}/>
        <Boxes progressCount={countPer.pending} couuntDocs={count.total-(count.rejected+count.verified)} color={"#FE7541"} title={"Pending"} title2={"Documents"}/>
    </div>

    )
    }
     const SelectBox=()=>{
        return(
          <div>

             <h2>Select</h2>
<form className='SelectBox'>
<select 
style={{width:"90%",height:"5rem",fontSize:"2rem",outline:"none",borderRadius:"1.5rem" ,padding:"5px 10px"}}>
    <option>Matric certificate</option>
</select>
<button
  style={{ cursor:"pointer",width:"10rem",height:"4rem",fontSize:"20px",borderRadius:"1.1rem",
  backgroundColor:"black", color:"white",}}> Upload File</button>
</form>
        
  </div>
        )
     }

// ==========================MUI file upload fun====================================
const Tablecomponent=()=>{
    
    return(
      
    <div style={{width:"100vw",height:"70vh",display:"flex"}}>

{/* {welcomeCard()} */}
 
{UplaodToBlockchainBoxes()}
{DisplayUplaodTable()}
    </div>
    
  )
}
export default Tablecomponent;
export {
    WelcomeCard,
    UplaodToBlockchainBoxes,
    DisplayUplaodTable,
    SelectBox
}
