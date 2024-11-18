import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const UniversityFilled = (
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
      d="M17.2734 5.85321V7.12661V8.4H18.4453V5.5368L19.8981 5.14453L12 3L4.10187 5.14453L12 7.27707L14.6367 6.56514L17.2734 5.85321Z"
      fill="black"
    />
    <path d="M7.89844 8V10.418H16.1016V8L12 9L7.89844 8Z" fill="black" />
    <path
      d="M21.437 18.4926C21.0423 16.7003 19.627 15.3225 17.7394 14.8564L12 21H22L21.437 18.4926Z"
      fill="black"
    />
    <path
      d="M14.5429 14.6719C14.2597 14.6719 13.9865 14.5442 13.8394 14.2672C15.2087 13.6581 16.1016 12.394 16.1016 10.9805V10.418H7.89844V10.9805C7.89844 11.9646 8.32531 12.8916 9.10121 13.5894C9.42008 13.8767 9.78828 14.0871 10.1649 14.2545C10.0398 14.4992 9.77199 14.6719 9.45711 14.6719C8.83512 14.6729 7.5 14.7 6.25707 14.8573L12 21L17.7394 14.8564C17 14.7 15.2904 14.6732 14.5429 14.6719Z"
      fill="black"
    />
    <path
      d="M2.56363 18.4905L2 21H12L6.25707 14.8573C4.37117 15.3242 2.95758 16.701 2.56363 18.4905Z"
      fill="black"
    />
  </svg>
);
