import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const MoneyFilled = (
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
      d="M1 5V19H23V5H1ZM12 15.5C11.3078 15.5 10.6311 15.2947 10.0555 14.9101C9.47993 14.5256 9.03133 13.9789 8.76642 13.3394C8.50151 12.6999 8.4322 11.9961 8.56725 11.3172C8.7023 10.6382 9.03564 10.0146 9.52513 9.52513C10.0146 9.03564 10.6383 8.7023 11.3172 8.56725C11.9961 8.4322 12.6999 8.50151 13.3394 8.76642C13.9789 9.03133 14.5256 9.47993 14.9101 10.0555C15.2947 10.6311 15.5 11.3078 15.5 12C15.5 12.9283 15.1313 13.8185 14.4749 14.4749C13.8185 15.1313 12.9283 15.5 12 15.5Z"
      fill="black"
    />
  </svg>
);
