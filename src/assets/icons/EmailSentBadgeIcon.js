import React from "react";

const EmailSentBadgeIcon = (props) => {
  return (
    <svg
      width={props.width}
      height={props.width}
      viewBox="0 0 64 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="64" height="64" rx="32" fill="#EAF9F7" />
      <rect x="8" y="8.5" width="48" height="48" rx="24" fill="#039F8D" />
      <mask
        id="mask0_1_1300"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="16"
        y="16"
        width="32"
        height="33"
      >
        <rect x="16" y="16.5" width="32" height="32" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_1300)">
        <path
          d="M21.5385 24.5L32.0002 31.1667L42.4618 24.5H21.5385ZM21.7438 42.5C21.0809 42.5 20.5135 42.264 20.0415 41.792C19.5695 41.32 19.3335 40.7526 19.3335 40.0897V24.9103C19.3335 24.2474 19.5695 23.68 20.0415 23.208C20.5135 22.736 21.0809 22.5 21.7438 22.5H42.2565C42.9194 22.5 43.4868 22.736 43.9588 23.208C44.4308 23.68 44.6668 24.2474 44.6668 24.9103V31.9617C44.6668 32.245 44.5709 32.4824 44.3792 32.674C44.1874 32.8658 43.9498 32.9617 43.6665 32.9617C43.3829 32.9617 43.1455 32.8658 42.9542 32.674C42.7626 32.4824 42.6668 32.245 42.6668 31.9617V26.423L32.6488 32.836C32.5737 32.8889 32.3575 32.9512 32.0002 33.023C31.8891 33.023 31.7788 33.0084 31.6695 32.9793C31.5599 32.9504 31.4539 32.9027 31.3515 32.836L21.3335 26.423V40.0897C21.3335 40.2094 21.3719 40.3078 21.4488 40.3847C21.5257 40.4616 21.6241 40.5 21.7438 40.5H28.8335C29.1168 40.5 29.3543 40.5959 29.5458 40.7877C29.7376 40.9794 29.8335 41.217 29.8335 41.5003C29.8335 41.7839 29.7376 42.0213 29.5458 42.2127C29.3543 42.4042 29.1168 42.5 28.8335 42.5H21.7438ZM36.9592 42.536L43.8155 35.6797C44.0002 35.495 44.2323 35.4006 44.5118 35.3963C44.7912 35.3919 45.0274 35.4863 45.2205 35.6797C45.4138 35.8728 45.5105 36.1069 45.5105 36.382C45.5105 36.6573 45.4138 36.8916 45.2205 37.0847L37.8028 44.5027C37.5617 44.7436 37.2805 44.864 36.9592 44.864C36.6378 44.864 36.3566 44.7436 36.1155 44.5027L32.4565 40.8437C32.2718 40.659 32.1774 40.4269 32.1732 40.1473C32.1689 39.868 32.2634 39.6317 32.4565 39.4383C32.6496 39.2452 32.8838 39.1487 33.1592 39.1487C33.4343 39.1487 33.6684 39.2452 33.8615 39.4383L36.9592 42.536Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default EmailSentBadgeIcon;