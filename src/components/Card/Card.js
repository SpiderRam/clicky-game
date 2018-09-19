import React from "react";
import "./Card.css";

const Card = props => {
    console.log(props.name);
    return(
        <div
            style={{backgroundImage:`url(${props.src})`}}
            key={props.key} 
            alt={props.alt}
            className="block"
            onClick={() => props.handleClick(props.name)}>
        </div>

        // <img 
        //     key={props.key} 
        //     alt={props.alt}
        //     className="block"
        //     src={props.src}
        //     onClick={() => props.handleClick(props.name)}
        // />
    )
};

export default Card;
