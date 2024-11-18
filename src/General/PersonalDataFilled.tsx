import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const PersonalDataFilled = (
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
      d="M19.707 15.7852C18.2991 14.3787 16.5304 13.3879 14.5956 12.9218L12 17.2426L9.4045 12.9218C7.4697 13.3879 5.70099 14.3787 4.293 15.7852L4 16.0781V21H20V16.0781L19.707 15.7852ZM12 10C12.7417 10 13.4667 9.78007 14.0834 9.36801C14.7001 8.95596 15.1807 8.37029 15.4645 7.68506C15.7484 6.99984 15.8226 6.24584 15.6779 5.51841C15.5333 4.79098 15.1761 4.1228 14.6517 3.59835C14.1272 3.0739 13.459 2.71675 12.7316 2.57206C12.0042 2.42736 11.2502 2.50162 10.5649 2.78545C9.87971 3.06928 9.29404 3.54993 8.88199 4.16661C8.46993 4.7833 8.25 5.50832 8.25 6.25C8.25114 7.24421 8.64659 8.19738 9.34961 8.9004C10.0526 9.60341 11.0058 9.99886 12 10Z"
      fill="black"
    />
  </svg>
);
