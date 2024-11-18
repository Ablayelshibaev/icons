import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const СhevronDown = ({
  fill = iconBaseDefaults.fill,
  width = iconBaseDefaults.width,
  height = iconBaseDefaults.height,
}: React.SVGProps<SVGSVGElement> & {
  fill?: string;
  width?: string;
  height?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 18.2319L2.94897 9.18194L4.36297 7.76794L12 15.4039L19.637 7.76794L21.051 9.18194L12 18.2319Z"
      fill="black"
    />
  </svg>
);
