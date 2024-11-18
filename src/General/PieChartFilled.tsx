import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const PieChartFilled = (
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
      d="M11 2.05051C8.74891 2.27551 6.64146 3.26007 5.0244 4.84221L11 9.85611V2.05051ZM3.7363 6.37051C2.43657 8.27594 1.8365 10.5725 2.03802 12.8702C2.23954 15.1679 3.23023 17.325 4.8418 18.9751L10.5918 12.1228L3.7363 6.37051ZM13 2.05051V12.3643L6.3706 20.2635C7.62921 21.121 9.06704 21.6796 10.5744 21.8968C12.0818 22.114 13.6188 21.984 15.0683 21.5168C16.5178 21.0496 17.8414 20.2574 18.9382 19.2008C20.0349 18.1441 20.8758 16.851 21.3967 15.4199C21.9176 13.9888 22.1048 12.4576 21.9438 10.9432C21.7829 9.42883 21.2782 7.97118 20.4683 6.68151C19.6583 5.39184 18.5644 4.30423 17.2701 3.50165C15.9758 2.69907 14.5153 2.20273 13 2.05051Z"
      fill="black"
    />
  </svg>
);
