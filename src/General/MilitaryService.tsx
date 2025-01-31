import React from "react";

export const MilitaryService = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M19.4376 5H2V19H19.4376L23.4376 12L19.4376 5ZM18.2769 17H4V7H18.2769L21.1341 12L18.2769 17ZM12.6351 10.8232L11.6771 7.875L10.7191 10.8232H7.6191L10.1271 12.6454L9.1691 15.5938L11.6772 13.7716L14.1852 15.5938L13.2272 12.6454L15.7353 10.8232H12.6351Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
