import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateInput from "./CreateInput";




function App(){


  //creating variable for notes
  const[notes,setNotes] = useState([]);

  
  
  //function to add node to the keeper app
    function addNote(note){
    setNotes(prevNotes =>{ return [...prevNotes,note];}); 
  }
  
  

  //functn to delete note
  function deleteNote(id){
    setNotes(prevNotes=>{return prevNotes.filter((note,index)=>{return index !== id;});});
    
  }
  




    return(
    <div>
      <Header/>
      <CreateInput onClick={addNote} />
      
      {notes.map((note,index)=> {return(<Note key={index} id={index} title={note.title} content={note.content} onPush={deleteNote} />);})}

      
      <Footer/>
    </div>
    );
}

export default App;