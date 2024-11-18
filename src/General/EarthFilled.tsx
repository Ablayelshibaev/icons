import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const EarthFilled = (
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
      d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM3.963 13.6254L5.5791 15.239L5.5634 17.0641C4.76738 16.0594 4.21912 14.8814 3.963 13.6254ZM7.3971 18.7817C7.77691 18.7536 8.14066 18.6171 8.44508 18.3882C8.74951 18.1594 8.98179 17.8479 9.1143 17.4909L10.2062 14.4909C10.3162 14.1888 10.3517 13.8646 10.3097 13.5458C10.2677 13.227 10.1495 12.9231 9.9651 12.6597C9.78068 12.3964 9.53548 12.1813 9.25029 12.0329C8.9651 11.8844 8.64832 11.8069 8.3268 11.8069H5.3542C5.08899 11.8069 4.83463 11.7015 4.6471 11.514C4.45956 11.3265 4.3542 11.0721 4.3542 10.8069C4.3542 10.5417 4.45956 10.2873 4.6471 10.0998C4.83463 9.91226 5.08899 9.8069 5.3542 9.8069H8.2352C8.44048 9.80696 8.6408 9.74385 8.80897 9.62613C8.97713 9.50841 9.105 9.3418 9.1752 9.1489L9.7787 7.4909C9.88388 7.20068 9.92019 6.89 9.88475 6.58335C9.84931 6.2767 9.7431 5.98248 9.5745 5.7239C9.4059 5.46533 9.17952 5.24946 8.91322 5.09334C8.64692 4.93722 8.34799 4.84512 8.04 4.8243C9.10113 4.23505 10.2805 3.89039 11.492 3.81551C12.7034 3.74063 13.9163 3.93742 15.0419 4.3915C14.7217 4.62329 14.4777 4.94506 14.3409 5.3159L13.7327 6.9869C13.6502 7.21351 13.6236 7.45666 13.655 7.69576C13.6865 7.93485 13.7752 8.16283 13.9135 8.36037C14.0518 8.55791 14.2357 8.71919 14.4496 8.83054C14.6635 8.94188 14.9011 9.00001 15.1423 9H18.45C18.5826 9 18.7098 9.05268 18.8036 9.14645C18.8973 9.24021 18.95 9.36739 18.95 9.5C18.95 9.63261 18.8973 9.75979 18.8036 9.85355C18.7098 9.94732 18.5826 10 18.45 10H16.5C15.837 10 15.2011 10.2634 14.7322 10.7322C14.2634 11.2011 14 11.837 14 12.5V13.5C14 13.8978 14.158 14.2794 14.4393 14.5607C14.7206 14.842 15.1022 15 15.5 15H16.5C16.6326 15 16.7598 15.0527 16.8536 15.1464C16.9473 15.2402 17 15.3674 17 15.5V17.0878C17 17.4781 17.1528 17.8528 17.4256 18.1319C16.066 19.3433 14.3404 20.0652 12.5232 20.183C10.7061 20.3008 8.90171 19.8074 7.3971 18.7817Z"
      fill="black"
    />
  </svg>
);
