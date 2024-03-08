import React, { useContext } from "react";
import Navbar from "./Navbar";
import noteContext from "../context/notes/noteContext"
import Notes from "./Notes";
import './homeCss.css'
import Alert from "./Alert";
import AddNote from "./AddNote";

export default function Home() {

  return (
    <>
        <Navbar />
      <div className="container main-container ">
      <div>
        <Alert message="Note is Deleted Succesfully !"/>
      </div>  
       <Notes/>
      </div>
      </>
  );
}
