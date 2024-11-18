import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const ViewGrid = (
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
      d="M3 11H11V3H3V11ZM5 5H9V9H5V5ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM3 21H11V13H3V21ZM5 15H9V19H5V15ZM13 21H21V13H13V21ZM15 15H19V19H15V15Z"
      fill="black"
    />
  </svg>
);
