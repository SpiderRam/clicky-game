import React from "react";
import "./Card.css";

const Card = props => {
    return(
        <div
            style={{backgroundImage:`url(${props.src})`}}
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
