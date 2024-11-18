import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const DigitalId = (
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
      d="M3 4.88532C3 4.3853 3.19863 3.90576 3.5522 3.5522C3.90576 3.19863 4.3853 3 4.88532 3H6.88764V4.39932H4.88532C4.75642 4.39932 4.63281 4.45052 4.54166 4.54167C4.45052 4.63281 4.39932 4.75643 4.39932 4.88532V6.888H3V4.88532ZM17.1124 3H19.1147C19.6147 3 20.0942 3.19863 20.4478 3.5522C20.8014 3.90576 21 4.3853 21 4.88532V6.888H19.6007V4.88568C19.6007 4.75678 19.5495 4.63317 19.4583 4.54203C19.3672 4.45088 19.2436 4.39968 19.1147 4.39968H17.1124V3ZM3 17.1124H4.39932V19.1147C4.39932 19.3832 4.61676 19.6007 4.88532 19.6007H6.88764V21H4.88532C4.3853 21 3.90576 20.8014 3.5522 20.4478C3.19863 20.0942 3 19.6147 3 19.1147V17.1124ZM19.6007 17.1124H21V19.1147C21 19.6147 20.8014 20.0942 20.4478 20.4478C20.0942 20.8014 19.6147 21 19.1147 21H17.1124V19.6007H19.1147C19.2436 19.6007 19.3672 19.5495 19.4583 19.4583C19.5495 19.3672 19.6007 19.2436 19.6007 19.1147V17.1124Z"
      fill="black"
    />
    <path
      d="M7.32 8.12064H8.77152V16.104H7.32V8.12064ZM12.1354 14.9059C12.2196 14.9135 12.3312 14.9214 12.4694 14.929H13.0339C14.0092 14.929 14.7349 14.6831 15.2112 14.1917C15.695 13.6924 15.937 12.9976 15.937 12.1066C15.937 11.2004 15.7026 10.5053 15.2342 10.0214C14.7655 9.5376 14.0398 9.29568 13.057 9.29568C12.6268 9.29568 12.3197 9.3072 12.1354 9.33024V14.9059ZM17.4576 12.1066C17.4576 12.7978 17.35 13.4008 17.135 13.9152C16.9198 14.4221 16.6127 14.8483 16.2134 15.1939C15.8218 15.532 15.3455 15.7854 14.785 15.9542C14.232 16.1155 13.6175 16.1962 12.9418 16.1962C12.6192 16.1962 12.2542 16.1807 11.8474 16.1501C11.4557 16.1292 11.0664 16.0752 10.6838 15.9888V8.23584C11.0702 8.1489 11.4633 8.09494 11.8589 8.07456C12.2271 8.05293 12.5959 8.04141 12.9648 8.04C13.633 8.04 14.2435 8.12064 14.7965 8.28192C15.3494 8.43564 15.8218 8.68152 16.2134 9.0192C16.6127 9.34932 16.9198 9.7716 17.135 10.2864C17.35 10.7933 17.4576 11.3999 17.4576 12.1066Z"
      fill="black"
    />
  </svg>
);
