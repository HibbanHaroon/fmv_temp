import React from "react";

const VenueIcon = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7539 8.05768H19.4461V5.94232H17.7539V8.05768ZM17.7539 13.5577H19.4461V11.4423H17.7539V13.5577ZM17.7539 19.0577H19.4461V16.9423H17.7539V19.0577ZM16.4 23.5V22.125H21.9V2.875H11.3231V5.88412L10.2231 4.89518V1.5H23V23.5H16.4ZM1 23.5V11.8125L7.6 5.94228L14.2 11.8125V23.5H8.99615V17.3125H6.20385V23.5H1ZM2.1 22.125H5.10385V15.9375H10.0961V22.125H13.1V12.5L7.6 7.67162L2.1 12.5V22.125Z"
        fill={props.color}
      />
    </svg>
  );
};

export default VenueIcon;
