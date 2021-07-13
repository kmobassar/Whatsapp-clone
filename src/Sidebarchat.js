import React, { useState,useEffect } from 'react';
import  './Sidebarchat.css';

import { Avatar } from '@material-ui/core';
import  db from "./firebase";
import {Link} from "react-router-dom";

function Sidebarchat({addNewChat,id,name}){                                                                                                                                  
    const [seed,setSeed]=useState("");
    const [messages, setMessages] = useState("");

    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);



    useEffect(()=>{

   
        setSeed(Math.floor(Math.random()*4000))
    }
    
    
    ,[])
    const createChat=()=>{
        const roomName=prompt("please enter a new name");

        if(roomName){
        
            db.collection("rooms").add({
                name:roomName,
            })

        }
        
    } 




    return !addNewChat ? (

        <Link to={`/rooms/${id}`} key={id}>

        <div className="sidebar_chat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebar__chat__info">
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>

        </div>
        </Link>
    ):<div onClick={createChat} className="sidebar_chat">
        <h2>Add new Chat</h2>
    </div>
}

export default Sidebarchat;