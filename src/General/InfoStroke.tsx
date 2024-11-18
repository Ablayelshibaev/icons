import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const InfoStroke = (
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
      d="M12 6.85C11.7726 6.85 11.5502 6.91745 11.3611 7.04381C11.172 7.17017 11.0246 7.34978 10.9375 7.55991C10.8505 7.77005 10.8277 8.00128 10.8721 8.22435C10.9165 8.44743 11.026 8.65234 11.1868 8.81317C11.3477 8.974 11.5526 9.08353 11.7757 9.1279C11.9987 9.17228 12.23 9.1495 12.4401 9.06246C12.6502 8.97542 12.8298 8.82802 12.9562 8.63891C13.0826 8.44979 13.15 8.22745 13.15 8C13.15 7.695 13.0288 7.40249 12.8132 7.18683C12.5975 6.97116 12.305 6.85 12 6.85ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C19.9976 14.121 19.154 16.1544 17.6542 17.6542C16.1544 19.154 14.121 19.9976 12 20ZM11.05 17H12.95V10.5H11.05V17Z"
      fill="black"
    />
  </svg>
);
