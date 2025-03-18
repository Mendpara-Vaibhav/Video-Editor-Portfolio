import PropTypes from "prop-types";
import React, { useReducer } from "react";

export const NavigationButtons = ({ text, property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <button
      className={`all-[unset] box-border inline-flex items-center gap-2.5 p-2.5 justify-center relative ${
        state.property1 === "variant-2" ? "bg-[#6f00a9]" : ""
      } ${className}`}
      onMouseLeave={() => dispatch({ type: "mouse_leave" })}
      onMouseEnter={() => dispatch({ type: "mouse_enter" })}
    >
      {text} {/* <-- Dynamic Text */}
    </button>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case "mouse_enter":
      return { ...state, property1: "variant-2" };

    case "mouse_leave":
      return { ...state, property1: "default" };

    default:
      return state;
  }
}

NavigationButtons.propTypes = {
  text: PropTypes.string.isRequired, // <-- Added text prop validation
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
