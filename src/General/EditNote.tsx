import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const EditNote = (
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
      d="M16.4141 3H3V21H21V7.5859L16.4141 3ZM19 19H5V5H15.5856L19 8.4144V19ZM9 13.5858V15H10.4142L13.6365 11.7778L12.2222 10.3636L9 13.5858ZM14.5809 8.9241C14.5205 8.86373 14.4489 8.81585 14.37 8.78318C14.2911 8.7505 14.2066 8.73369 14.1213 8.73369C14.0359 8.73369 13.9514 8.7505 13.8725 8.78318C13.7936 8.81585 13.722 8.86373 13.6616 8.9241L13.0707 9.5151L14.4849 10.9293L15.0759 10.3383C15.1978 10.2164 15.2663 10.0511 15.2663 9.8787C15.2663 9.70632 15.1978 9.541 15.0759 9.4191L14.5809 8.9241Z"
      fill="black"
    />
  </svg>
);
