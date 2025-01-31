import React from "react";

export const City = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 6V2H7V11.9608L5.4 11.037L2 13V21H22V6H17ZM7 19.2H3.8V14.0392L5.4 13.1155L7 14.0392V19.2ZM15.2 19.2H8.8V3.8H15.2V19.2ZM20.2 19.2H17V7.8H20.2V19.2ZM13 6H11V8H13V6ZM13 14H11V16H13V14ZM13 10H11V12H13V10Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
