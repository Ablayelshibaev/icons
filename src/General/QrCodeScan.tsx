import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const QrCodeScan = (
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
      d="M2.50003 7.01923V2.50003H7.01923V4.00001H4.00001V7.01923H2.50003ZM2.50003 21.5V16.9808H4.00001V20H7.01923V21.5H2.50003ZM16.9808 21.5V20H20V16.9808H21.5V21.5H16.9808ZM20 7.01923V4.00001H16.9808V2.50003H21.5V7.01923H20ZM17.2211 17.2211H18.5769V18.5769H17.2211V17.2211ZM17.2211 14.5096H18.5769V15.8654H17.2211V14.5096ZM15.8654 15.8654H17.2211V17.2211H15.8654V15.8654ZM14.5096 17.2211H15.8654V18.5769H14.5096V17.2211ZM13.1539 15.8654H14.5096V17.2211H13.1539V15.8654ZM15.8654 13.1539H17.2211V14.5096H15.8654V13.1539ZM14.5096 14.5096H15.8654V15.8654H14.5096V14.5096ZM13.1539 13.1539H14.5096V14.5096H13.1539V13.1539ZM18.5769 5.42311V10.8462H13.1539V5.42311H18.5769ZM10.8462 13.1539V18.5769H5.42311V13.1539H10.8462ZM10.8462 5.42311V10.8462H5.42311V5.42311H10.8462ZM9.65386 17.3846V14.3462H6.61541V17.3846H9.65386ZM9.65386 9.65386V6.61541H6.61541V9.65386H9.65386ZM17.3846 9.65386V6.61541H14.3462V9.65386H17.3846Z"
      fill="black"
    />
  </svg>
);
