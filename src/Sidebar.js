
import React, { useEffect, useState } from 'react';
import Sidebarchat from './Sidebarchat';

import { Avatar ,IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined, Unsubscribe } from '@material-ui/icons';
import "./Sidebar.css";
import db from "./firebase";
import { useStateValue } from './StateProvider';


function Sidebar() {

    const[rooms,setRooms]=useState([]);
    const [{user},dispatch]=useStateValue();

    useEffect(()=>{
        const Unsubscribe =db.collection("rooms").onSnapshot((snapshot)=>(
         setRooms(
             snapshot.docs.map(doc=>(
                 {
                     id: doc.id,
                     data:doc.data(),
                 })
             ))
         
    ));
    return()=>{
        Unsubscribe();
    }

    },[] );

    return (
        
            <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar__rightHeader">
                    <IconButton>
                   <DonutLargeIcon/>
                   </IconButton>
                   <IconButton>
                   <ChatIcon/>
                   </IconButton>
                   <IconButton>
                   <MoreVertIcon/>
                   </IconButton>
                   
                    </div>
                </div>
              
                <div className="sidebar__search">
                    <div className="search__container">
                    <SearchOutlined/>
                    <input placeholder="Start a new chat" type="text"/>
                    </div>
                
            </div>
            <div className="sidebar__chats">
                <Sidebarchat addNewChat/>
               {rooms.map(room =>(
                   <Sidebarchat key={room.id} id={room.id} 
                   name={room.data.name}/>
    ))}
                
            </div>


    
            


            
        </div>
    );
}

export default Sidebar;