import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Court = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 4V12H17V4H19Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 12V4H14V12H12Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 2H20V4H11V2Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 12H20V14H11V12Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.4062 19C13.0956 19 12.8438 19.2519 12.8438 19.5625V20.125H18.6562V19.5625C18.6562 19.2519 18.4044 19 18.0938 19H13.4062ZM10.8438 19.5625C10.8438 18.1473 11.991 17 13.4062 17H18.0938C19.509 17 20.6562 18.1473 20.6562 19.5625V22H10.8438V19.5625Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 22H9.5V20H22V22Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 7H12V9H2V7Z"
      fill="black"
    />
  </svg>
);
