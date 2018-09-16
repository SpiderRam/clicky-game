import React from "react";
import "./Femmes.css";

const Femmes = props => (
    <span onClick={() => props.changeToClickedTrue(props.id)} className="true"><img alt={props.name} src={props.image} />
    </span>
);

export default Femmes;
