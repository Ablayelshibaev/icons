import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const MicrophoneFilled = (
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
      d="M5.6353 14.7811L9.04529 18.1911L15.4441 12.5451L11.2812 8.38218L5.6353 14.7811ZM19.6936 4.13298C19.268 3.70733 18.7626 3.36969 18.2065 3.13933C17.6504 2.90897 17.0543 2.79041 16.4524 2.79041C15.8504 2.79041 15.2543 2.90897 14.6982 3.13933C14.1421 3.36969 13.6367 3.70733 13.2111 4.13298C12.5878 4.76473 12.167 5.56793 12.0024 6.43998L17.3865 11.824C18.2586 11.6595 19.0618 11.2388 19.6936 10.6155C20.5532 9.75583 21.0361 8.58992 21.0361 7.37423C21.0361 6.15854 20.5532 4.99264 19.6936 4.13298ZM2.59669 18.2248L5.60179 21.23L7.5444 19.5158L4.3108 16.2821L2.59669 18.2248Z"
      fill="black"
    />
  </svg>
);
