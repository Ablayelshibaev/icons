import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const LeafFilled = (
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
      d="M4.15192 16.6621C5.63696 14.613 7.31071 12.7076 9.15123 10.9708C12.3623 8.00854 15.872 5.38737 19.6239 3.1494L19.8467 3.4894C16.276 5.90579 12.9654 8.68582 9.96803 11.7849C7.07397 14.8177 4.7102 18.3153 2.97552 22.1316L4.60783 22.9083C5.10002 21.8417 5.64202 20.8002 6.21552 19.7749C19.7543 21.4934 21.8755 12.828 21.8755 2.0424C9.03053 1.0882 0.44463 5.4731 4.15192 16.6621Z"
      fill="black"
    />
  </svg>
);
