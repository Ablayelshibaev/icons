import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Foreigner = (
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
      d="M20 12C19.9975 12.6741 19.9148 13.3455 19.7534 14H16.6491C16.7164 13.3355 16.7501 12.6679 16.75 12H14.75C14.75 12.692 14.7166 13.36 14.66 14H9.34C9.2833 13.36 9.25 12.692 9.25 12C9.25 11.308 9.2834 10.64 9.34 10H12V8H9.6209C10.0966 5.6111 10.9827 4.00001 12 4.00001V2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12H20ZM4.2466 14C3.9178 12.6869 3.9178 11.3131 4.2466 10H7.3509C7.21637 11.3299 7.21637 12.6701 7.3509 14H4.2466ZM5.0054 16H7.6714C7.9316 17.2943 8.40642 18.5359 9.0762 19.6735C7.3336 18.9593 5.8942 17.6604 5.0054 16ZM7.6714 8H5.0054C5.8942 6.33963 7.3336 5.04071 9.0762 4.3265C8.4064 5.46411 7.93158 6.70574 7.6714 8ZM12 20C10.9827 20 10.0966 18.3889 9.6209 16H14.3791C13.9034 18.3889 13.0173 20 12 20ZM14.9238 19.6735C15.5936 18.5359 16.0684 17.2943 16.3286 16H18.9946C18.1058 17.6604 16.6664 18.9593 14.9238 19.6735Z"
      fill="black"
    />
    <path
      d="M18.755 4.71145C18.509 4.87585 18.2197 4.96365 17.9238 4.96365C17.7273 4.96365 17.5328 4.92495 17.3512 4.84975C17.1697 4.77455 17.0048 4.66435 16.8658 4.52545C16.7269 4.38645 16.6167 4.22155 16.5415 4.04005C16.4663 3.85845 16.4276 3.66395 16.4276 3.46745C16.4276 3.17155 16.5153 2.88225 16.6798 2.63621C16.8442 2.39016 17.0778 2.19839 17.3512 2.08514C17.6246 1.9719 17.9255 1.94227 18.2157 2C18.5059 2.05773 18.7725 2.20023 18.9818 2.40948C19.191 2.61872 19.3335 2.88532 19.3913 3.17555C19.449 3.46575 19.4194 3.76665 19.3061 4.04005C19.1929 4.31345 19.0011 4.54705 18.755 4.71145Z"
      fill="black"
    />
    <path
      d="M14.9238 8.96365V7.55745C15.7195 6.76185 16.7986 6.31485 17.9238 6.31485C19.049 6.31485 20.1281 6.76185 20.9238 7.55745V8.96365H14.9238Z"
      fill="black"
    />
  </svg>
);
