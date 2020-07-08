import React from "react";
import "./AttrCard.scss";

const AttrCard = ({ attr, headTitle, togglePin, pinKeys, unPinKeys }) => {
  const togglePinKeys = attr.pinned ? unPinKeys : pinKeys;
  const toggleVal = attr.pinned ? false : true;
  const toggle = () => togglePin(togglePinKeys, toggleVal);
  const cardClassNames = `attrcard 
  attrcard--${attr.pinned ? "pinned" : "unpinned"}
  attrcard--${pinKeys.length > 1 ? "dependent" : "independent"}
  `;

  return (
    <div
      onClick={toggle}
      className={cardClassNames}
      role="button"
      title="Click to pin this attribute (and any parents) for future randomizations"
    >
      <h3 onClick={toggle} className="attrcard__name">
        {headTitle}: {attr.name}
      </h3>
      <p onClick={toggle} className="attrcard__description">{attr.description}</p>
    </div>
  );
};

export default AttrCard;
