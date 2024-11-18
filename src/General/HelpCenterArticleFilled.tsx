import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const HelpCenterArticleFilled = (
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
      d="M1 17H11V7H1V17ZM14 7V9H23V7H14ZM14 13H23V11H14V13ZM14 17H23V15H14V17Z"
      fill="black"
    />
  </svg>
);
