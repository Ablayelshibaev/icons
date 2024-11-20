import React from "react";

export const PieChart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM6.5723 6.14C7.7946 5.00266 9.34352 4.27835 11 4.0695V9.8556L6.5723 6.14ZM4 12C3.99995 10.4627 4.44587 8.95835 5.2837 7.6694L10.5913 12.1233L6.14 17.428C4.76537 15.9547 4.00061 14.015 4 12ZM12 20C10.4625 20.0001 8.958 19.5541 7.6689 18.7162L13 12.3638V4.0695C15.0189 4.32299 16.8652 5.33655 18.1628 6.90374C19.4605 8.47093 20.1119 10.4739 19.9845 12.5046C19.857 14.5353 18.9602 16.441 17.4767 17.8336C15.9933 19.2262 14.0347 20.001 12 20Z"
      fill="black"
    />
  </svg>
);
