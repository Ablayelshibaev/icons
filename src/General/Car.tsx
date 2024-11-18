import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Car = (
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
      d="M23 17V11.9468C23.0002 11.6124 22.912 11.2839 22.7445 10.9946C22.577 10.7053 22.336 10.4653 22.0459 10.299C20.6667 9.47156 19.0932 9.02338 17.4849 8.99995L14.9387 6.25065C14.5642 5.84635 14.1102 5.52378 13.6052 5.30319C13.1002 5.0826 12.5551 4.96874 12.004 4.96875H9.83C9.124 4.96867 8.42599 5.11811 7.7819 5.40722C7.13781 5.69634 6.56225 6.11858 6.0931 6.64615L4 8.99995H2.8758C2.37831 8.99995 1.90119 9.19758 1.54941 9.54936C1.19763 9.90114 1 10.3783 1 10.8758V16.2L3.9254 16.9389C4.11443 17.464 4.45936 17.9187 4.91399 18.2423C5.36862 18.5659 5.91126 18.7428 6.46923 18.7494C7.02721 18.7561 7.5739 18.5921 8.0361 18.2794C8.49829 17.9667 8.85394 17.5203 9.0554 17H14.6412C14.8411 17.5153 15.1921 17.9582 15.6482 18.2705C16.1043 18.5828 16.6441 18.7499 17.1969 18.7499C17.7497 18.7499 18.2895 18.5828 18.7456 18.2705C19.2017 17.9582 19.5527 17.5153 19.7526 17H23ZM7.5127 7.90915C7.80363 7.58225 8.16042 7.32058 8.55964 7.14134C8.95886 6.9621 9.39149 6.86934 9.8291 6.86915H12.0039C12.2931 6.86945 12.579 6.92935 12.844 7.04513C13.109 7.16091 13.3472 7.33007 13.5439 7.54205L14.8947 8.99995H6.5426L7.5127 7.90915ZM2.9 10.876L4 10.8999H4.8525H17.4C18.7048 10.9111 19.9826 11.2724 21.1 11.9462V15.1H19.7839C19.5995 14.5604 19.251 14.092 18.7872 13.7604C18.3233 13.4287 17.7674 13.2504 17.1972 13.2504C16.627 13.2504 16.0711 13.4287 15.6072 13.7604C15.1434 14.092 14.7949 14.5604 14.6105 15.1H9.0867C8.90491 14.5701 8.56497 14.1087 8.11276 13.7781C7.66054 13.4475 7.1178 13.2635 6.55776 13.2511C5.99772 13.2386 5.44732 13.3981 4.98081 13.7083C4.51431 14.0184 4.15414 14.4641 3.9489 14.9854L2.9 14.7207V10.876ZM6.5 17C6.30222 17 6.10888 16.9413 5.94443 16.8314C5.77998 16.7215 5.65181 16.5654 5.57612 16.3826C5.50043 16.1999 5.48063 15.9988 5.51921 15.8049C5.5578 15.6109 5.65304 15.4327 5.79289 15.2928C5.93275 15.153 6.11093 15.0578 6.30491 15.0192C6.49889 14.9806 6.69996 15.0004 6.88268 15.0761C7.06541 15.1518 7.22159 15.2799 7.33147 15.4444C7.44135 15.6088 7.5 15.8022 7.5 16C7.49971 16.2651 7.39426 16.5193 7.20679 16.7067C7.01931 16.8942 6.76513 16.9997 6.5 17ZM17.1972 17C16.9994 17 16.8061 16.9413 16.6416 16.8314C16.4772 16.7215 16.349 16.5654 16.2733 16.3826C16.1976 16.1999 16.1778 15.9988 16.2164 15.8049C16.255 15.6109 16.3502 15.4327 16.4901 15.2928C16.6299 15.153 16.8081 15.0578 17.0021 15.0192C17.1961 14.9806 17.3972 15.0004 17.5799 15.0761C17.7626 15.1518 17.9188 15.2799 18.0287 15.4444C18.1386 15.6088 18.1972 15.8022 18.1972 16C18.1969 16.2651 18.0915 16.5193 17.904 16.7067C17.7165 16.8942 17.4623 16.9997 17.1972 17Z"
      fill="black"
    />
  </svg>
);
