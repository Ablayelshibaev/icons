import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Business = (
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
      d="M16 6V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V6H2V21H22V6H16ZM10 4H14V6H10V4ZM4 8H20V10C19.9997 10.2651 19.8943 10.5193 19.7068 10.7068C19.5193 10.8943 19.2651 10.9997 19 11H5C4.73487 10.9997 4.48069 10.8943 4.29321 10.7068C4.10574 10.5193 4.00029 10.2651 4 10V8ZM4 19V12.8163C4.32031 12.9345 4.65859 12.9967 5 13H11V15H13V13H19C19.3414 12.9967 19.6797 12.9345 20 12.8163V19H4Z"
      fill="black"
    />
  </svg>
);
