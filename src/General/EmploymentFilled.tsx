import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const EmploymentFilled = (
  iconBaseDefaults: React.SVGProps<SVGSVGElement> & IIcon
) => (
  <svg
    width={iconBaseDefaults.width}
    height={iconBaseDefaults.height}
    viewBox="0 0 24 24"
    fill={iconBaseDefaults.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1926_10718)">
      <mask
        id="mask0_1926_10718"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={iconBaseDefaults.width}
        height={iconBaseDefaults.height}
      >
        <path d="M24 0H0V24H24V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_1926_10718)">
        <path
          d="M14.5 3V2.5C14.5 1.83696 14.2366 1.20107 13.7678 0.732233C13.2989 0.263392 12.663 0 12 0C11.337 0 10.7011 0.263392 10.2322 0.732233C9.76339 1.20107 9.5 1.83696 9.5 2.5V3H4V22H20V3H14.5ZM11.1 2.5C11.1 2.38181 11.1233 2.26478 11.1685 2.15558C11.2137 2.04639 11.28 1.94718 11.3636 1.8636C11.4472 1.78003 11.5464 1.71374 11.6556 1.66851C11.7648 1.62328 11.8818 1.6 12 1.6C12.1182 1.6 12.2352 1.62328 12.3444 1.66851C12.4536 1.71374 12.5528 1.78003 12.6364 1.8636C12.72 1.94718 12.7863 2.04639 12.8315 2.15558C12.8767 2.26478 12.9 2.38181 12.9 2.5V3H11.1V2.5ZM11.3975 15.9565L8.0645 12.623L9.2656 11.4209L11.3975 13.5522L14.9219 10.0293L16.123 11.2314L11.3975 15.9565ZM17.6627 5.8882C17.5772 6.20714 17.3889 6.48897 17.127 6.68999C16.865 6.89101 16.5441 6.99998 16.2139 7H7.7861C7.45591 6.99998 7.13495 6.89101 6.873 6.68999C6.61106 6.48897 6.42275 6.20714 6.3373 5.8882L6.0992 5H17.9008L17.6627 5.8882Z"
          fill="black"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1926_10718">
        <rect
          width={iconBaseDefaults.width}
          height={iconBaseDefaults.height}
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
