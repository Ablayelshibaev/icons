import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const ShareV2 = (
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
      d="M17.9999 16C17.5873 16.0006 17.1794 16.0867 16.8019 16.253C16.4243 16.4193 16.0854 16.6621 15.8065 16.966L7.90646 12.7086C8.03086 12.2444 8.03086 11.7556 7.90646 11.2914L15.8065 7.034C16.2823 7.54277 16.9209 7.86945 17.6119 7.95769C18.303 8.04592 19.0031 7.89017 19.5916 7.51731C20.18 7.14445 20.6199 6.57787 20.8352 5.91535C21.0505 5.25282 21.0278 4.53591 20.771 3.88834C20.5142 3.24076 20.0394 2.70313 19.4286 2.36824C18.8177 2.03335 18.1091 1.9222 17.425 2.05396C16.741 2.18573 16.1244 2.55215 15.6816 3.09C15.2389 3.62784 14.9977 4.30337 14.9999 5C15.0025 5.24082 15.0344 5.48044 15.0947 5.7136L7.19666 9.97C6.78787 9.52519 6.25431 9.21417 5.66582 9.07763C5.07733 8.94109 4.46132 8.98541 3.89844 9.20477C3.33555 9.42414 2.852 9.80834 2.51109 10.3071C2.17018 10.8058 1.98779 11.3959 1.98779 12C1.98779 12.6041 2.17018 13.1942 2.51109 13.6929C2.852 14.1917 3.33555 14.5759 3.89844 14.7952C4.46132 15.0146 5.07733 15.0589 5.66582 14.9224C6.25431 14.7858 6.78787 14.4748 7.19666 14.03L15.0947 18.2864C14.9472 18.8918 14.9923 19.5281 15.2235 20.1067C15.4548 20.6853 15.8607 21.1773 16.3848 21.5143C16.9089 21.8513 17.525 22.0165 18.1474 21.9868C18.7698 21.9571 19.3674 21.7341 19.857 21.3487C20.3467 20.9634 20.7039 20.4349 20.8791 19.837C21.0542 19.239 21.0385 18.6013 20.8341 18.0127C20.6297 17.4241 20.2469 16.9139 19.7388 16.5531C19.2308 16.1923 18.6229 15.999 17.9999 16Z"
      fill="black"
    />
  </svg>
);
