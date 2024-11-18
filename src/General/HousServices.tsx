import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const HousServices = (
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
      d="M12 2.80371L3 7.99991V20.9999H21V7.99991L12 2.80371ZM19 18.9999H5V9.15461L12 5.11311L19 9.15461V18.9999ZM9.5 11.4999V11.9999H8V16.9999H16V11.9999H14.5V11.4999C14.5 10.8369 14.2366 10.201 13.7678 9.73214C13.2989 9.2633 12.663 8.99991 12 8.99991C11.337 8.99991 10.7011 9.2633 10.2322 9.73214C9.76339 10.201 9.5 10.8369 9.5 11.4999ZM14.3 13.6999V15.2999H9.7V13.6999H14.3ZM12.9 11.4999V11.9999H11.1V11.4999C11.1 11.2612 11.1948 11.0323 11.3636 10.8635C11.5324 10.6947 11.7613 10.5999 12 10.5999C12.2387 10.5999 12.4676 10.6947 12.6364 10.8635C12.8052 11.0323 12.9 11.2612 12.9 11.4999Z"
      fill="black"
    />
  </svg>
);
