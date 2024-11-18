import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const CowFilled = (
  iconBaseDefaults: React.SVGProps<SVGSVGElement> & IIcon
) => (
  <svg
    width={iconBaseDefaults.width}
    height={iconBaseDefaults.height}
    viewBox="0 0 24 24"
    fill={iconBaseDefaults.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1962_12620)">
      <mask
        id="mask0_1962_12620"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={iconBaseDefaults.width}
        height={iconBaseDefaults.height}
      >
        <path d="M24 0H0V24H24V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_1962_12620)">
        <path
          d="M20.2711 6.69318C20.551 6.51283 20.7811 6.26519 20.9406 5.9729C21.1 5.68062 21.1836 5.35302 21.1838 5.02008V4.33008H20.2438L19.9616 5.01218C19.9244 5.10212 19.8614 5.17901 19.7805 5.23311C19.6996 5.2872 19.6044 5.31608 19.5071 5.31608H16.0309C15.9336 5.31607 15.8385 5.28719 15.7576 5.2331C15.6767 5.179 15.6137 5.10211 15.5765 5.01218L15.2943 4.33008H14.3543V5.02008C14.3543 5.54945 14.5646 6.05714 14.9389 6.43146C15.3132 6.80579 15.8209 7.01608 16.3503 7.01608H16.7803L16.2883 8.02358H4.88539C4.45368 8.02358 4.02705 8.11675 3.63465 8.29673C3.24224 8.47672 2.89331 8.73928 2.61167 9.06647C2.33004 9.39367 2.12234 9.77779 2.00276 10.1926C1.88318 10.6074 1.85454 11.0432 1.91879 11.4701L3.50349 22.0001H5.26729L5.04389 18.4459L6.50479 16.1822L14.1385 16.9944L14.8884 22.0001H16.6522V16.8037L19.6667 10.6667H21.4358C21.6227 10.6667 21.8058 10.6143 21.9645 10.5155C22.1231 10.4166 22.2509 10.2753 22.3333 10.1076L22.8633 9.02938L20.2711 6.69318Z"
          fill="black"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1962_12620">
        <rect
          width={iconBaseDefaults.width}
          height={iconBaseDefaults.height}
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
