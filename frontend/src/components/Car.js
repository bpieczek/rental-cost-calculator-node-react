import React, { useState } from "react";

function Car(props){
    return(
        <div className="user">
            <p onClick={toggleDesc}>{props.title}</p>
            {desc && ( 
                <div className="description">
                    {props.content}
                </div>
            )}      
            <button 
                onClick = {editHandler}
            >Edytuj</button>
            <button 
            className="delete" 
            onClick = {() => props.onDelete(props.id)}
            >Usuń</button>
        </div>
    );
}