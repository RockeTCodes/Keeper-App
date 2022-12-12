import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";


function CreateInput(props){

    const[note,setNote] = useState({title:"",content:""});
    const[expand,setExpand] = useState(false);

    function change(event){
      const{name,value} = event.target;
      setNote(prevNote=>{return{...prevNote,[name]:value}});
    }

  function click(){
    setExpand(true);
  }

    return(
    <div>
     <form className="create-note">
      <input onClick={click} name="title" placeholder="Title" onChange={change} value={note.title}/>
      {expand?<textarea name="content" placeholder="Write your note" rows={expand?"3":"1"} onChange={change} value={note.content} />:null}
      <Zoom in={expand?true:false}><Fab onClick={(event)=>{props.onClick(note);setNote({title:"",content:""});event.preventDefault();}}><AddIcon/></Fab></Zoom>
      
     </form>
    </div>);
}
export default CreateInput;