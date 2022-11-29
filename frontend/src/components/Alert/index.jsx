import React from "react";
import "./style.css"

export function handleAlert(type, msg) {
    let alertDiv = document.getElementById("Alert")
    alertDiv.style.display = ""
    switch(type.toLowerCase()) {
        case "alert":
            alertDiv.style.backgroundColor = "#f44336"
        break;
        case "warning":
            alertDiv.style.backgroundColor = "#ff9800"
        break;
        case "success":
            alertDiv.style.backgroundColor = "#04aa6d"
        break;
    }
    document.getElementById("alertMsg").innerHTML = msg
    setTimeout(()=>{document.getElementById("Alert").style.display="none"}, 2500)
}

function Alert() {
    return (
        <div className="Alert" id="Alert">
            <span className="closebtn" onClick={(e)=>{
                document.getElementById("Alert").style.display="none"
            }}>&times;</span>  
            <strong id="alertMsg">Danger!</strong>
        </div>
    );
}

export default Alert;
