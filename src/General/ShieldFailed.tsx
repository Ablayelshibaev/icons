import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const ShieldFailed = (
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
      d="M10.0576 8.76743L9.06758 9.75743L11.01 11.7L9.06738 13.6424L10.0574 14.6324L12 12.69L13.9424 14.6324L14.9324 13.6424L12.99 11.7L14.9324 9.75763L13.9424 8.76763L12 10.71L10.0576 8.76743Z"
      fill="black"
    />
    <path
      d="M12 3.07532L19 5.84662V12.06C18.9976 13.6394 18.5808 15.1904 17.7911 16.5582C17.0014 17.926 15.8666 19.0625 14.5 19.8542L12 21.2971L9.5 19.8537C8.13348 19.0621 6.99868 17.9256 6.209 16.5579C5.41932 15.1903 5.00244 13.6393 5 12.06V5.84662L12 3.07532ZM12 0.924316L3 4.48732V12.06C3.00293 13.9903 3.51243 15.8861 4.47759 17.5578C5.44275 19.2295 6.82976 20.6186 8.5 21.5863L12 23.6064L15.5 21.5859C17.1702 20.6183 18.5572 19.2292 19.5223 17.5576C20.4875 15.8859 20.997 13.9903 21 12.06V4.48732L12 0.924316Z"
      fill="black"
    />
  </svg>
);
