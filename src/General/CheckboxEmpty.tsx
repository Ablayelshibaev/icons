import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const CheckboxEmpty = (
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
      d="M17 5C17.5302 5.00061 18.0386 5.21152 18.4135 5.58646C18.7885 5.9614 18.9994 6.46975 19 7V17C18.9994 17.5302 18.7885 18.0386 18.4135 18.4135C18.0386 18.7885 17.5302 18.9994 17 19H7C6.46975 18.9994 5.9614 18.7885 5.58646 18.4135C5.21152 18.0386 5.00061 17.5302 5 17V7C5.00061 6.46975 5.21152 5.9614 5.58646 5.58646C5.9614 5.21152 6.46975 5.00061 7 5H17ZM17 3H7C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H17C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3Z"
      fill="black"
    />
  </svg>
);
