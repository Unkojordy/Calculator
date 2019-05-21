import React from "react";

const Btn = props => {
  return (
    <div
      className={`
            equal-btn
            ${isNaN(props.children) ? "operator" : null}
            `}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Btn;
