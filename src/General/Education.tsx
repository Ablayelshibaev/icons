import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Education = (
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
      d="M12 3.03998L0 9.99998L5 12.9V16.3094C5 16.836 5.13861 17.3533 5.40192 17.8094C5.66522 18.2655 6.04394 18.6442 6.5 18.9075L12 22.0829L17.5 18.9075C17.9561 18.6442 18.3348 18.2655 18.5981 17.8094C18.8614 17.3533 19 16.836 19 16.3094V12.9L22 11.16V17H24V9.99998L12 3.03998ZM12 5.35208L18.29 8.99998H12V11H18.29L12 14.6479L3.9863 9.99998L12 5.35208ZM17 16.3094C16.9997 16.4849 16.9534 16.6572 16.8657 16.8092C16.7779 16.9611 16.6518 17.0874 16.5 17.1754L12 19.7735L7.5 17.1754C7.34815 17.0874 7.22206 16.9611 7.13432 16.8092C7.04657 16.6572 7.00026 16.4849 7 16.3094V14.06L12 16.96L17 14.06V16.3094Z"
      fill="black"
    />
  </svg>
);
