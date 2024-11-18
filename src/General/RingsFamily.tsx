import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const RingsFamily = (
  iconBaseDefaults: React.SVGProps<SVGSVGElement> & IIcon
) => (
  <svg
    width={iconBaseDefaults.width}
    height={iconBaseDefaults.height}
    viewBox="0 0 24 24"
    fill={iconBaseDefaults.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.0001 1.19995H14.4001V3.59995H18.0001V1.19995Z" fill="black" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99854 18.9999C9.48578 18.9999 10.8647 18.5361 11.9985 17.7452C13.1324 18.5361 14.5113 18.9999 15.9985 18.9999C19.8645 18.9999 22.9985 15.8659 22.9985 11.9999C22.9985 8.13391 19.8645 4.9999 15.9985 4.9999C14.5113 4.9999 13.1324 5.46372 11.9985 6.25459C10.8647 5.46372 9.48578 4.9999 7.99854 4.9999C4.13254 4.9999 0.998535 8.13391 0.998535 11.9999C0.998535 15.8659 4.13254 18.9999 7.99854 18.9999ZM7.99854 6.9999C5.23711 6.9999 2.99854 9.23848 2.99854 11.9999C2.99854 14.7613 5.23711 16.9999 7.99854 16.9999C8.90936 16.9999 9.76331 16.7564 10.4988 16.3308C9.55921 15.1393 8.99854 13.6351 8.99854 11.9999C8.99854 10.3647 9.55921 8.86049 10.4988 7.66897C9.76331 7.24345 8.90936 6.9999 7.99854 6.9999ZM15.9985 6.9999C15.0877 6.9999 14.2338 7.24345 13.4983 7.66897C14.4379 8.86049 14.9985 10.3647 14.9985 11.9999C14.9985 13.6351 14.4379 15.1393 13.4983 16.3308C14.2338 16.7564 15.0877 16.9999 15.9985 16.9999C18.76 16.9999 20.9985 14.7613 20.9985 11.9999C20.9985 9.23848 18.76 6.9999 15.9985 6.9999ZM12.9985 11.9999C12.9985 10.8741 12.6264 9.83516 11.9985 8.99942C11.3706 9.83516 10.9985 10.8741 10.9985 11.9999C10.9985 13.1257 11.3706 14.1646 11.9985 15.0004C12.6264 14.1646 12.9985 13.1257 12.9985 11.9999Z"
      fill="black"
    />
  </svg>
);
