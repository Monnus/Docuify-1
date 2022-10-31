import React ,{useState}from 'react'
import ecllipsis from "../../assets/images/ellipsis-solid.svg"




const DisplayInput=({setDisplay,setTodosCalanders,todosCalanders,display,setDescription,description,value,Time})=>{
if(!display)setDescription("");


const handleacept=()=>{
    if(description=="")return alert("you have not inserted a description");
    setTodosCalanders(item=>[...todosCalanders,{
time:value,
description
    }]);
    alert("Succsessfull")
    setDisplay(!display)
}


    return (

<div style={{display:`${display?"block":"none"}`,position:"absolute",padding:"1rem",color:"gray",borderRadius:"1rem",
fontSize:"2.5rem",top:"2rem",width:"25rem", textAlign:"center",lineHeight:"4rem",
height:"20rem",backgroundColor:"lightgray",boxShadow:"5px 5px 10px white"}}>

    <br/>
    <label htmlFor='description'>Description</label>
    <br/>
    <input onChange={(e)=>setDescription(e.target.value)} value={description} placeholder="Enter description" type="text"
     style={{coloroutline:"none",padding:"1rem",fontSize:"1.5rem",border:"1px solid #793280",
     width:"20rem",height:"5rem",borderRadius:"1rem",boxShadow:"1px 1px 10px white"}}/>
     <br/>

     <button
      style={{width:"8rem",cursor:"pointer",
      height:"4rem",
      fontSize:"1.5rem",backgroundColor:"black",borderRadius:"1rem",
      marginRight:"1rem", color:"white"}} onClick={handleacept}>accept</button>

</div>
    )
}

const CalenderBox = ({handleCalander,minusDays,todosCalanders}) => {
    const [value, Time]=useState("10:00");
    const [display,setDisplay]=useState(false)
    const [description,setDescription]=useState("");
    const colors=["#793280","#83D0D6","#FE7541"];
 




  return (
    <div style={{height:"auto"}}>
    <div  style={{display:"flex", position:"relative",
    justifyContent:"space-evenly", alignItems:"center",fontSize:"1.1rem"}}>
      <h6>{handleCalander(minusDays)}</h6>
   <img src={ecllipsis} style={{width:"1rem",height:"1rem"}}/>
     
      </div>
    <div style={{height:"auto",textAlign:"center"}}>
      {/*to does goes here */}

      {todosCalanders.map((item,i)=>{
        return(
      
            <div style={{display:"flex",color:"gray",padding:"0 0 0 25px",justifyContent:"space-around",height:"auto",marginBottom:"5px"}}>
                <h6 style={{color:"rgba(121,50,128)",fontWeight:"bolder"}}>{item.time}</h6>
                {/* Line */}
                <div style={{height:"auto",width:"0.3rem",background:colors[i]}}></div>
                <div style={{height:"auto",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <h5 style={{color:"lightgray"}}>{item.title}</h5>
                <h4 style={{fontSize:"1rem",alignSelf:"end"}}>{item.description}</h4>
                </div>
            </div>

        )
      })}

     
    </div>
          </div>

  )
}

export default CalenderBox
