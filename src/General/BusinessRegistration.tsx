import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const BusinessRegistration = (
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
      d="M16 9C16.2652 9 16.5196 8.89464 16.7071 8.70711C16.8946 8.51957 17 8.26522 17 8C17 7.73478 16.8946 7.48043 16.7071 7.29289C16.5196 7.10536 16.2652 7 16 7H8C7.73478 7 7.48043 7.10536 7.29289 7.29289C7.10536 7.48043 7 7.73478 7 8C7 8.26522 7.10536 8.51957 7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9H16ZM19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V16.7578L5 14.7578V5H19V19H9.2422L7.2422 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM12 18V12H6L8.293 14.293L3.13 19.4556L4.544 20.8696L9.707 15.707L12 18Z"
      fill="black"
    />
  </svg>
);
