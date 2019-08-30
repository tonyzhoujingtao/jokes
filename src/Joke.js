import React from "react"

function Joke (props) {
    
    return (
        <div>
            <h2 style={{display: !props.name && "none", fontSize: 50}}>{props.name}</h2>
            <p style={{display: !props.name && "none", fontSize: 30}}>{props.content}</p>
        </div>
        
    )
}

export default Joke