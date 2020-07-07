import React from "react";

const AttrCard = ({ attr, togglePin, pinKeys, unPinKeys }) => {
  const togglePinKeys = attr.pinned ? unPinKeys : pinKeys;
  const toggleVal = attr.pinned ? false : true;

  return (
    <div onClick={() => togglePin(togglePinKeys, toggleVal)}>
      <h4>{attr.name}</h4>
      <p>{attr.description}</p>
    </div>
  );
};

export default AttrCard;
