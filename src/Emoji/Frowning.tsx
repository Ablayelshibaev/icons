import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Frowning = (
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
      d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM6.65 10C6.65 9.733 6.72918 9.47199 6.87752 9.24998C7.02586 9.02797 7.2367 8.85494 7.48338 8.75276C7.73006 8.65058 8.0015 8.62385 8.26338 8.67594C8.52525 8.72803 8.7658 8.8566 8.9546 9.04541C9.1434 9.23421 9.27197 9.47475 9.32406 9.73663C9.37615 9.9985 9.34942 10.2699 9.24724 10.5166C9.14506 10.7633 8.97203 10.9741 8.75002 11.1225C8.52802 11.2708 8.26701 11.35 8 11.35C7.64196 11.35 7.29858 11.2078 7.04541 10.9546C6.79224 10.7014 6.65 10.358 6.65 10ZM14.8281 17.4551C14.0664 16.7274 13.0535 16.3213 12 16.3213C10.9465 16.3213 9.93363 16.7274 9.1719 17.4551L7.7568 16.041C8.31398 15.4837 8.97548 15.0416 9.70354 14.74C10.4316 14.4383 11.2119 14.2831 12 14.2831C12.7881 14.2831 13.5684 14.4383 14.2965 14.74C15.0245 15.0416 15.686 15.4837 16.2432 16.041L14.8281 17.4551ZM16 11.35C15.733 11.35 15.472 11.2708 15.25 11.1225C15.028 10.9741 14.8549 10.7633 14.7528 10.5166C14.6506 10.2699 14.6239 9.9985 14.6759 9.73663C14.728 9.47475 14.8566 9.23421 15.0454 9.04541C15.2342 8.8566 15.4748 8.72803 15.7366 8.67594C15.9985 8.62385 16.2699 8.65058 16.5166 8.75276C16.7633 8.85494 16.9741 9.02797 17.1225 9.24998C17.2708 9.47199 17.35 9.733 17.35 10C17.35 10.358 17.2078 10.7014 16.9546 10.9546C16.7014 11.2078 16.358 11.35 16 11.35Z"
      fill="black"
    />
  </svg>
);
