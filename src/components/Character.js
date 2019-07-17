import React from "react";

const Character = props => {
  return <li className="char">{props.character.name}</li>;
};

export default Character;
