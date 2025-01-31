import React from "react";

export const DocumentTableFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M15.4141 2H4V22H20V6.5859L15.4141 2ZM16 16H8V8H16V16ZM11.35 9.35H9.35V11.35H11.35V9.35ZM14.65 12.65H12.65V14.65H14.65V12.65ZM11.35 12.65H9.35V14.65H11.35V12.65ZM14.65 9.35H12.65V11.35H14.65V9.35Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
