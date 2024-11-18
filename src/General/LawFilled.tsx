import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const LawFilled = (
  iconBaseDefaults: React.SVGProps<SVGSVGElement> & IIcon
) => (
  <svg
    width={iconBaseDefaults.width}
    height={iconBaseDefaults.height}
    viewBox="0 0 24 24"
    fill={iconBaseDefaults.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.99999 7.4435V20C3.99999 20.5304 4.2107 21.0391 4.58578 21.4142C4.96085 21.7893 5.46956 22 5.99999 22H20V8H5.99999C5.29565 7.99597 4.60518 7.80384 3.99999 7.4435ZM8.99999 11H15V13H8.99999V11ZM5.99999 2C5.60146 1.99933 5.21191 2.11834 4.88179 2.3416C4.52656 2.58106 4.25761 2.92825 4.11453 3.33205C3.97146 3.73585 3.96182 4.17492 4.08704 4.58461C4.21227 4.9943 4.46573 5.35295 4.81011 5.60776C5.15449 5.86257 5.57159 6.00007 5.99999 6H20V2H5.99999Z"
      fill="black"
    />
  </svg>
);
