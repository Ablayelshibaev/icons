import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Internet = (
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
      d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM18.9946 8H16.3286C16.0684 6.70574 15.5936 5.46411 14.9238 4.3265C16.6664 5.04071 18.1058 6.33963 18.9946 8ZM20 12C19.9975 12.6741 19.9148 13.3455 19.7534 14H16.6491C16.7164 13.3355 16.7501 12.6679 16.75 12C16.7501 11.3321 16.7164 10.6645 16.6491 10H19.7534C19.9148 10.6545 19.9975 11.3259 20 12ZM12 20C10.9827 20 10.0966 18.3889 9.6209 16H14.3791C13.9034 18.3889 13.0173 20 12 20ZM9.34 14C9.2833 13.36 9.25 12.692 9.25 12C9.25 11.308 9.2834 10.64 9.34 10H14.66C14.7167 10.64 14.75 11.308 14.75 12C14.75 12.692 14.7166 13.36 14.66 14H9.34ZM4 12C4.00246 11.3259 4.08524 10.6545 4.2466 10H7.3509C7.21637 11.3299 7.21637 12.6701 7.3509 14H4.2466C4.08524 13.3455 4.00246 12.6741 4 12ZM12 4C13.0173 4 13.9034 5.6111 14.3791 8H9.6209C10.0966 5.6111 10.9827 4 12 4ZM9.0762 4.3265C8.4064 5.46411 7.93158 6.70574 7.6714 8H5.0054C5.8942 6.33963 7.3336 5.04071 9.0762 4.3265ZM5.0054 16H7.6714C7.9316 17.2943 8.40642 18.5359 9.0762 19.6735C7.3336 18.9593 5.8942 17.6604 5.0054 16ZM14.9238 19.6735C15.5936 18.5359 16.0684 17.2943 16.3286 16H18.9946C18.1058 17.6604 16.6664 18.9593 14.9238 19.6735Z"
      fill="black"
    />
  </svg>
);
