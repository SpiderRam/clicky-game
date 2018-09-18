import React from "react";
import "./Card.css";

const Card = props => {
    console.log(props.alt);
    return(
        <img 
            key={props.key} 
            alt={props.alt}
            className="block"
            src={props.src}
            onClick={() => props.onClick}
        />
    )
};

export default Card;
