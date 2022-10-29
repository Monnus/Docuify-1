import React,{useState} from 'react'




const Boxes = ({color="gray",title,title2}) => {
    const [count,setCount]=useState(0);

  return (
    <div className='boxStyle'
     style={{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"1rem",
  backgroundColor:color,width:"13.5rem"  ,marginRight:"auto",padding:"0.5rem" ,minWidth:'10rem',height:"13rem",lineHeight:"5.5rem"}}>
<div className='avatarsDiv' style={{display:"flex",}}>
{/*<AvatarGroup>
  <Avatar color="primary"  variant="soild">+{dataFromTheServer2}</Avatar>
      {avatars.map((avatar) => (
        <Avatar key={avatar.alt} {...avatar} />
      ))}

    </AvatarGroup>
      <MoreVertIcon sx={{marginLeft:"auto",color:'gray'}}/>*/}
</div>
<div style={{lineHeight:"1rem"}}>
<h4 style={{fontWeight:"600",color:"white"}}>{title} </h4>
<br/>
<h4 style={{fontWeight:"600",color:"white"}}>{title2}</h4>
<br/>
</div>

 <div style={{height:"4rem",width:"100%",padding:"20px 5px" }}>


<div className='boxLine'></div>

 </div>
   </div>
  )
};
export default Boxes;