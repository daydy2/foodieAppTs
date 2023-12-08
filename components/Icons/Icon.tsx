import Svg, { SvgProps, G, Path } from "react-native-svg";

type StateProps = {
  color: string;
  size: number;
  focused: boolean;
};

// type CustomSvgProps = SvgProps & { xmlns: String };

export const HomeIcon = ({ color, size, focused }: StateProps): JSX.Element => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={focused ? color : "none"}
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21H15M9 21V17C9 15.3431 10.3431 14 12 14V14C13.6569 14 15 15.3431 15 17V21M9 21H15"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export const ProfileIcon = ({ color, size, focused }: StateProps): JSX.Element => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={focused ? color : "none"}
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <G opacity="0.8">
        <Path
          d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
};
export const CategoryIcon = ({ color, size,focused }: StateProps): JSX.Element => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size + 1} ${size}`}
      fill={focused ? color : "none"}
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <G opacity="0.8">
        <Path
          d="M14.3334 20.4V14.6C14.3334 14.2686 14.602 14 14.9334 14H20.7334C21.0647 14 21.3334 14.2686 21.3334 14.6V20.4C21.3334 20.7314 21.0647 21 20.7334 21H14.9334C14.602 21 14.3334 20.7314 14.3334 20.4Z"
          stroke={color}
          stroke-width="1.5"
        />
        <Path
          d="M3.33337 20.4V14.6C3.33337 14.2686 3.602 14 3.93337 14H9.73337C10.0647 14 10.3334 14.2686 10.3334 14.6V20.4C10.3334 20.7314 10.0647 21 9.73337 21H3.93337C3.602 21 3.33337 20.7314 3.33337 20.4Z"
          stroke={color}
          stroke-width="1.5"
        />
        <Path
          d="M14.3334 9.4V3.6C14.3334 3.26863 14.602 3 14.9334 3H20.7334C21.0647 3 21.3334 3.26863 21.3334 3.6V9.4C21.3334 9.73137 21.0647 10 20.7334 10H14.9334C14.602 10 14.3334 9.73137 14.3334 9.4Z"
          stroke={color}
          stroke-width="1.5"
        />
        <Path
          d="M3.33337 9.4V3.6C3.33337 3.26863 3.602 3 3.93337 3H9.73337C10.0647 3 10.3334 3.26863 10.3334 3.6V9.4C10.3334 9.73137 10.0647 10 9.73337 10H3.93337C3.602 10 3.33337 9.73137 3.33337 9.4Z"
          stroke={color}
          stroke-width="1.5"
        />
      </G>
    </Svg>
  );
};
export const StoreIcon = ({ color, size,focused }: StateProps): JSX.Element => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={focused ? color : "none"}
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <G opacity="0.8">
        <Path
          d="M21.1516 3H17.1599L17.6599 8C17.6599 8 18.6599 9 20.1599 9C21.2369 9 21.9703 8.48445 22.2982 8.1937C22.4289 8.07782 22.4767 7.90091 22.448 7.72861L21.7435 3.50136C21.6953 3.21205 21.4449 3 21.1516 3Z"
          stroke={color}
          stroke-width="1.5"
        />
        <Path
          d="M17.1599 3L17.6599 8C17.6599 8 16.6599 9 15.1599 9C13.6599 9 12.6599 8 12.6599 8V3H17.1599Z"
          stroke={color}
          stroke-width="1.5"
        />
        <Path
          d="M12.6599 3V8C12.6599 8 11.6599 9 10.1599 9C8.65991 9 7.65991 8 7.65991 8L8.15991 3H12.6599Z"
          stroke={color}
          stroke-width="1.5"
        />
        <Path
          d="M8.15999 3H4.16827C3.87497 3 3.62465 3.21205 3.57643 3.50136L2.87189 7.72862C2.84317 7.90091 2.891 8.07782 3.0217 8.1937C3.34963 8.48445 4.08295 9 5.15997 9C6.65997 9 7.65999 8 7.65999 8L8.15999 3Z"
          stroke={color}
          stroke-width="1.5"
        />
        <Path
          d="M3.66663 9V19C3.66663 20.1046 4.56206 21 5.66663 21H19.6666C20.7712 21 21.6666 20.1046 21.6666 19V9"
          stroke={color}
          stroke-width="1.5"
        />
        <Path
          d="M15.5 21V15C15.5 13.8954 14.6046 13 13.5 13H11.5C10.3954 13 9.5 13.8954 9.5 15V21"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="16"
        />
      </G>
    </Svg>
  );
};
export const UberIcon = () => {
  return (
    <Svg
      width="112"
      height="80"
      viewBox="0 0 112 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M25.959 0V26.0547C25.959 29.6309 24.6818 32.6961 22.1274 35.2505C19.6049 37.773 16.5556 39.0342 12.9795 39.0342C9.43527 39.0342 6.38597 37.773 3.83158 35.2505C1.27719 32.6961 0 29.6309 0 26.0547V0H5.12474V26.0547C5.12474 28.226 5.89105 30.0939 7.42369 31.6584C8.95632 33.1911 10.8082 33.9574 12.9795 33.9574C15.1188 33.9574 16.9547 33.1911 18.4874 31.6584C20.0519 30.0939 20.8342 28.226 20.8342 26.0547V0H25.959Z"
        fill="#142327"
      />
      <Path
        d="M29.5556 0H34.6324V12.3568C37.5699 9.77053 40.9705 8.47737 44.834 8.47737C49.0487 8.47737 52.6408 9.97807 55.6103 12.9795C58.6117 15.949 60.1124 19.5411 60.1124 23.7558C60.1124 27.9705 58.6117 31.5786 55.6103 34.58C52.6408 37.5495 49.0487 39.0342 44.834 39.0342C40.9705 39.0342 37.5699 37.7411 34.6324 35.1547V39.0342H29.5556V0ZM37.6019 30.9879C39.6134 32.9675 42.0241 33.9574 44.834 33.9574C47.6438 33.9574 50.0385 32.9675 52.0182 30.9879C54.0298 28.9763 55.0356 26.5656 55.0356 23.7558C55.0356 20.946 54.0298 18.5512 52.0182 16.5716C50.0385 14.5919 47.6438 13.6021 44.834 13.6021C42.0241 13.6021 39.6134 14.5919 37.6019 16.5716C35.6222 18.5512 34.6324 20.946 34.6324 23.7558C34.6324 26.5656 35.6222 28.9763 37.6019 30.9879Z"
        fill="#142327"
      />
      <Path
        d="M67.1234 12.9795C70.1248 9.97807 73.7328 8.47737 77.9476 8.47737C82.1623 8.47737 85.7544 9.97807 88.7239 12.9795C91.7253 15.949 93.226 19.5411 93.226 23.7558C93.226 24.554 93.1462 25.4002 92.9865 26.2942H68.0813C68.656 28.5293 69.8534 30.3653 71.6734 31.8021C73.4934 33.207 75.5848 33.9095 77.9476 33.9095C80.9171 33.9095 83.3916 32.8398 85.3713 30.7005H91.5497C90.2725 33.223 88.4046 35.2505 85.946 36.7832C83.5193 38.2839 80.8532 39.0342 77.9476 39.0342C73.7328 39.0342 70.1248 37.5495 67.1234 34.58C64.1539 31.5786 62.6692 27.9705 62.6692 23.7558C62.6692 19.5411 64.1539 15.949 67.1234 12.9795ZM68.0813 21.2174H87.8139C87.2711 18.9823 86.0737 17.1463 84.2218 15.7095C82.4018 14.2726 80.3104 13.5542 77.9476 13.5542C75.5848 13.5542 73.4774 14.2726 71.6255 15.7095C69.8055 17.1463 68.6241 18.9823 68.0813 21.2174Z"
        fill="#142327"
      />
      <Path
        d="M101.846 12.3568C104.688 9.77053 108.073 8.47737 112 8.47737V13.5542C109.19 13.5542 106.795 14.56 104.816 16.5716C102.836 18.5512 101.846 20.946 101.846 23.7558V39.0342H96.7216V8.47737H101.846V12.3568Z"
        fill="#142327"
      />
      <Path
        d="M1.14947 78.9465V45.4202H24.4742V51.0239H7.42369V59.4054H24.0911V64.8654H7.42369V73.3428H24.4742V78.9465H1.14947Z"
        fill="#06C167"
      />
      <Path
        d="M38.5066 79.3297C35.3456 79.3297 32.6954 78.1642 30.5561 75.8333C28.4168 73.4705 27.3472 70.5649 27.3472 67.1165C27.3472 63.6362 28.4008 60.7305 30.5082 58.3997C32.6475 56.0368 35.3136 54.8554 38.5066 54.8554C41.987 54.8554 44.717 56.0368 46.6966 58.3997V55.2386H52.6835V78.9465H46.6966V75.8333C44.6851 78.1642 41.9551 79.3297 38.5066 79.3297ZM35.2019 72.0976C36.511 73.4386 38.1075 74.1091 39.9914 74.1091C41.8752 74.1091 43.4558 73.4386 44.7329 72.0976C46.0421 70.7565 46.6966 69.0961 46.6966 67.1165C46.6966 65.1049 46.0421 63.4286 44.7329 62.0876C43.4558 60.7465 41.8752 60.076 39.9914 60.076C38.1075 60.076 36.511 60.7465 35.2019 62.0876C33.9247 63.4286 33.2861 65.1049 33.2861 67.1165C33.2861 69.0961 33.9247 70.7565 35.2019 72.0976Z"
        fill="#06C167"
      />
      <Path
        d="M69.7542 79.0423C67.1679 79.0423 65.0765 78.3079 63.48 76.8391C61.8835 75.3704 61.0853 73.3907 61.0853 70.9002V60.4591H55.9126V55.2386H61.0853V48.3418H66.9763V55.2386H73.6337V60.4591H66.9763V69.607C66.9763 72.2572 68.3493 73.5823 71.0953 73.5823C71.9574 73.5823 72.8035 73.4386 73.6337 73.1512L74.2563 78.3239C72.6918 78.8028 71.1911 79.0423 69.7542 79.0423Z"
        fill="#06C167"
      />
      <Path
        d="M87.7911 79.8086C85.3005 79.8086 83.0655 79.2179 81.0858 78.0365C79.1062 76.8551 77.7491 75.2267 77.0148 73.1512L82.1874 71.5228C83.1772 73.8537 85.077 75.0191 87.8869 75.0191C89.3237 75.0191 90.4572 74.7318 91.2874 74.157C92.1176 73.5504 92.5327 72.7362 92.5327 71.7144C92.5327 70.7565 92.0058 70.1179 90.9521 69.7986C89.8984 69.4793 88.4137 69.2398 86.4979 69.0802C84.6141 68.9205 83.1134 68.6172 81.9958 68.1702C79.2818 67.0207 77.9248 65.057 77.9248 62.2791C77.9248 60.1398 78.8507 58.3358 80.7027 56.867C82.5546 55.3663 84.8216 54.616 87.5037 54.616C90.0262 54.616 92.1335 55.2067 93.8258 56.3881C95.5181 57.5695 96.6356 59.134 97.1784 61.0818L92.1016 62.4707C91.8142 61.449 91.2874 60.6347 90.5211 60.0281C89.7548 59.3895 88.7649 59.0702 87.5516 59.0702C86.3702 59.0702 85.3804 59.3735 84.5821 59.9802C83.8158 60.5868 83.4326 61.3053 83.4326 62.1354C83.4326 63.1891 84.0074 63.9076 85.1569 64.2907C86.3383 64.6739 87.9028 64.9612 89.8505 65.1528C91.8302 65.3125 93.3149 65.6158 94.3048 66.0628C96.9869 67.1804 98.3279 69.0802 98.3279 71.7623C98.3279 74.189 97.3381 76.1367 95.3584 77.6054C93.4107 79.0742 90.8883 79.8086 87.7911 79.8086Z"
        fill="#06C167"
      />
    </Svg>
  );
};
export const CookieIcon = ({ color, size }: StateProps): JSX.Element => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size + 1} ${size + 1}`}
      fill="none"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14.5 9.51L14.51 9.49889"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.5 8.51L8.51 8.49889"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.5 14.51L8.51 14.4989"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.5 19.5L2.73626 3.5041C2.63087 3.05618 3.04815 2.66122 3.48961 2.79106L19.5 7.5"
        stroke={color}
        stroke-width="1.5"
      />
      <Path
        d="M22.698 8.92467C22.9324 7.98703 22.3623 7.0369 21.4247 6.80249C20.487 6.56808 19.5369 7.13816 19.3025 8.0758C18.9106 9.64318 17.4015 12.1241 15.0753 14.4503C12.7743 16.7513 9.92714 18.6442 7.10672 19.2951C6.16497 19.5124 5.57771 20.452 5.79504 21.3937C6.01236 22.3355 6.95198 22.9227 7.89373 22.7054C11.5734 21.8563 14.9762 19.4991 17.5502 16.9252C20.0989 14.3764 22.0898 11.3573 22.698 8.92467Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};
export const CartIcon = ({ color, size }: StateProps): JSX.Element => {
  const increasedStrokeWidth = 25; // Adjust this value as needed

  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size + 1} ${size + 1}`}
      fill="none"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5"
        stroke={color}
        stroke-width={increasedStrokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5"
        stroke={color}
        stroke-width={increasedStrokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5"
        stroke={color}
        stroke-width={increasedStrokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const SearchIcon = ({ color, size }: StateProps): JSX.Element => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      stroke={color}
      viewBox={`0 0 ${size + 1} ${size + 1}`}
      fill="none"
    >
      <Path
        d="M15.5 15.5L19 19"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const CartPlusIcon = ({ color, size }: StateProps): JSX.Element => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      stroke={color}
      viewBox={`0 0 ${size + 1} ${size + 1}`}
      fill="none"
    >
      <Path
        d="M2 4.00004H14.6667L12.6667 10.6667H4L2 4.00004ZM2 4.00004L1.5 2.33337"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.6615 7.33333H7.99483M9.32817 7.33333H7.99483M7.99483 7.33333V6M7.99483 7.33333V8.66667"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.33337 13C7.33337 13.5523 6.88566 14 6.33337 14C5.78109 14 5.33337 13.5523 5.33337 13"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.3334 13C11.3334 13.5523 10.8857 14 10.3334 14C9.78109 14 9.33337 13.5523 9.33337 13"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const CaretLeft = ({ color, size }: StateProps): JSX.Element => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size + 1} ${size + 1}`}
      fill="none"
    >
      <Path
        d="M15 6L9 12L15 18"
        // stroke="#165B3A"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const UserIcon = (): JSX.Element => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
    >
      <Path
        d="M29.1666 116.667V110.833C29.1666 88.2817 47.4483 70 70 70V70C92.5516 70 110.833 88.2817 110.833 110.833V116.667"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M70 69.9999C82.8866 69.9999 93.3333 59.5532 93.3333 46.6666C93.3333 33.7799 82.8866 23.3333 70 23.3333C57.1133 23.3333 46.6666 33.7799 46.6666 46.6666C46.6666 59.5532 57.1133 69.9999 70 69.9999Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
