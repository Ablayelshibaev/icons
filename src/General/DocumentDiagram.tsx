import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const DocumentDiagram = (
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
      d="M15.4141 2H4V22H20V6.5859L15.4141 2ZM18 20H6V4H14.5856L18 7.4144V20ZM8 16H9.6V12H8V16ZM14.4 16H16V10H14.4V16ZM11.2 16H12.8V8H11.2V16Z"
      fill="black"
    />
  </svg>
);
