import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const AirplaneFilled = (
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
      d="M22.0806 10.5333L19.9688 9.84326H14.9167L10.131 1.84326H7.45053L9.90373 9.84326H5.30593L3.81593 7.35166H1.10193L2.47923 11.8433L1.10193 16.3353H3.81553L5.30553 13.8438H9.90373L7.45053 21.8438H10.131L14.9167 13.8438H19.9688L22.0806 13.1538C22.357 13.0635 22.5978 12.8882 22.7685 12.6528C22.9393 12.4174 23.0312 12.1341 23.0312 11.8434C23.0312 11.5526 22.9393 11.2693 22.7685 11.0339C22.5978 10.7986 22.357 10.6235 22.0806 10.5333Z"
      fill="black"
    />
  </svg>
);
