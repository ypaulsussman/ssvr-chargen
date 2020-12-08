import React from "react";
import Proptypes from "prop-types";
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
    <button
      onClick={toggle}
      className={cardClassNames}
      title="Click to pin this attribute (and any parents) for future randomizations"
    >
      <h3 onClick={toggle} className="attrcard__name">
        {headTitle}: {attr.name}
      </h3>
      <p onClick={toggle} className="attrcard__description">
        {attr.description}
      </p>
    </button>
  );
};

AttrCard.propTypes = {
  attr: Proptypes.shape({
    description: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    pinned: Proptypes.bool,
  }),
  headTitle: Proptypes.string.isRequired,
  togglePin: Proptypes.func.isRequired,
  pinKeys: Proptypes.arrayOf(Proptypes.string).isRequired,
  unPinKeys: Proptypes.arrayOf(Proptypes.string).isRequired,
};

AttrCard.defaultProps = {
  attr: {
    pinned: false,
  },
};

export default AttrCard;
