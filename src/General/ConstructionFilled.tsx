import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const ConstructionFilled = ({
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
      d="M4 2L4 5.99767L6 5.99767V4H7V5.99767L9 5.99767L9 2H4Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 7.99948L8.35301 7.99849L9 8L8.9698 20H11V22H2V20H3.96979L4 7.99793L2 7.99767V5.99767L20 6V8L18 7.99974V11.8122L22 15.0611L20.9409 16.4053L17 13.2044L13.0591 16.4053L12 15.0611L16 11.8122V7.99948ZM6.97986 16L6.96979 20H5.9698L5.97986 16H6.97986ZM6.98992 12L6.98489 14H5.9849L5.98993 12H6.98992ZM5.99496 10H6.99496L7 7.99832L5.17656 7.99808L6 8L5.99496 10Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.53 17.6741L17 14.807L13.47 17.6741V22H20.53V17.6741Z"
      fill="black"
    />
  </svg>
);
