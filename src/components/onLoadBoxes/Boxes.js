import React,{useState} from 'react'




const Boxes = ({color="gray",title,title2,couuntDocs, progressCount}) => {
    const [count,setCount]=useState(0);
console.log("progressCount",Number(progressCount));
  return (
    <div className='container'
     style={{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"1rem",
  backgroundColor:color,width:"13.5rem"  ,marginRight:"auto",padding:"0.5rem" ,minWidth:'10rem',height:"13rem",lineHeight:"5.5rem",boxShadow:"10px 10px 10px #e0e0e0"}}>
<div className='avatarsDiv' style={{display:"flex",}}>
{/*<AvatarGroup>
  <Avatar color="primary"  variant="soild">+{dataFromTheServer2}</Avatar>
      {avatars.map((avatar) => (
        <Avatar key={avatar.alt} {...avatar} />
      ))}

    </AvatarGroup>
      <MoreVertIcon sx={{marginLeft:"auto",color:'gray'}}/>*/}
</div>
<div style={{lineHeight:"0.8rem"}}>
<h4 style={{fontWeight:"600",color:"white"}}>{title} </h4>
<br/>
<h4 style={{fontWeight:"600",color:"white"}}>{title2}</h4>
<br/>
</div>
<h3
 style={{fontWeight:"700",color:"white",width:"2.5rem",height:"2.5rem",
 borderRadius:"100%",textAlign:"center",opacity:"5",backgroundImage:`linear-gradient( #e5e5e5,${color})`}}>{couuntDocs}</h3>

 <div style={{height:"4rem",width:"100%",padding:"20px 5px" }}>

<div className='boxLine' style={{width:"100%",backgroundColor:"white"}}>
<div className='boxLine'  style={{width:progressCount,backgroundColor:"#ffae42"}}>
  <span style={{alignSelf:'baseline',color:'white',fontWeight:'bold',height:'60px'}}>loading...{progressCount}</span>
</div>
</div>

 </div>
   </div>
  )
};
export default Boxes;