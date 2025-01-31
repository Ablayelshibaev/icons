import React from "react";

export const FolderOpened = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M21 9V5H10.9584L8.9584 3H3V9H1L3 21H21L23 9H21ZM4.6943 19L3.361 11H20.6391L19.3058 19H4.6943ZM5 5H8.13L10.13 7H19V9H5V5Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
