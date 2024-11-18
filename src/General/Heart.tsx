import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Heart = (
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
      d="M16.6685 5C19.1248 5 20 6.9658 20 8.8055C20 11.9611 15.5972 16.7943 12 19.5388C8.4029 16.7943 4 11.9611 4 8.8055C4 6.9658 4.8752 5 7.3316 5C7.9569 5.05023 8.56139 5.24799 9.09548 5.57705C9.62956 5.9061 10.078 6.35708 10.4041 6.893L12 9.0056L13.5959 6.893C13.922 6.35708 14.3705 5.90609 14.9046 5.57703C15.4387 5.24798 16.0432 5.05023 16.6685 5ZM16.6685 3C15.7327 3.04457 14.8211 3.31163 14.0092 3.77903C13.1972 4.24642 12.5085 4.90067 12 5.6875C11.4915 4.90068 10.8028 4.24644 9.99089 3.77905C9.17899 3.31166 8.26736 3.04459 7.3316 3C3.9564 3 2 5.5992 2 8.8055C2 13.5555 8.4583 19.6251 12 22C15.5417 19.6251 22 13.5555 22 8.8055C22 5.5992 20.0436 3 16.6685 3Z"
      fill="black"
    />
  </svg>
);
