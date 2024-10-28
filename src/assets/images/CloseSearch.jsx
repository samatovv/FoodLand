import React from "react";

const CloseSearch = ({open}) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.461 12.889L12.4 13.95L9.999 11.551L7.599 13.947L6.539 12.886L8.938 10.491L6.539 8.093L7.6 7.032L10 9.431L12.401 7.034L13.461 8.096L11.061 10.491L13.461 12.889ZM10 0.75C4.624 0.75 0.25 5.124 0.25 10.5C0.25 15.876 4.624 20.25 10 20.25C15.376 20.25 19.75 15.876 19.75 10.5C19.75 5.124 15.376 0.75 10 0.75Z"
        fill={open ? "#93A27C" : "#E2E2E2"}
      />
    </svg>
  );
};

export default CloseSearch;
