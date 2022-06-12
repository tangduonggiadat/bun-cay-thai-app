import React from 'react';
import Svg, {
  Path,
  Circle,
  Rect,
  G,
  Defs,
  LinearGradient,
  Stop,
  Line,
  ClipPath,
  Pattern,
  Use,
  Image,
  Mask,
} from 'react-native-svg';

export const Pin = ({width = 14, height = 17}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15 8.00006C15 13.4445 8 18.1112 8 18.1112C8 18.1112 1 13.4445 1 8.00006C1 6.14354 1.7375 4.36307 3.05025 3.05031C4.36301 1.73756 6.14348 1.00006 8 1.00006C9.85652 1.00006 11.637 1.73756 12.9497 3.05031C14.2625 4.36307 15 6.14354 15 8.00006Z"
        stroke="#80CD28"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8 10.3334C9.28866 10.3334 10.3333 9.28872 10.3333 8.00006C10.3333 6.71139 9.28866 5.66673 8 5.66673C6.71134 5.66673 5.66667 6.71139 5.66667 8.00006C5.66667 9.28872 6.71134 10.3334 8 10.3334Z"
        stroke="#80CD28"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const ChevronLeft = ({width = 40, height = 40, color = 'black'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15 18L9 12L15 6"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export const LineHorizontal = ({
  width = 130,
  height = 1,
  color = '#C0C0C0',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 130 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Line y1="0.5" x2="130" y2="0.5" stroke={color} />
    </Svg>
  );
};
export const PhoneRing = ({width = 24, height = 24, color = '#000000'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14.0074 5.01374C14.9894 5.20496 15.8918 5.68429 16.5993 6.39039C17.3067 7.09648 17.787 7.99722 17.9786 8.97731L14.0074 5.01374ZM14.0074 1C16.0476 1.22621 17.95 2.13807 19.4024 3.58586C20.8548 5.03365 21.7708 6.93131 22 8.96727L14.0074 1ZM20.9946 16.9747V19.985C20.9958 20.2644 20.9384 20.5411 20.8263 20.7971C20.7141 21.0532 20.5496 21.283 20.3433 21.4719C20.1369 21.6609 19.8934 21.8047 19.6281 21.8942C19.3629 21.9838 19.0818 22.017 18.803 21.9919C15.7093 21.6563 12.7377 20.6012 10.1267 18.9113C7.69763 17.3707 5.63816 15.3152 4.0946 12.8907C2.39553 10.2729 1.33816 7.29253 1.00816 4.19092C0.983037 3.91344 1.01608 3.63378 1.10518 3.36974C1.19428 3.1057 1.33749 2.86307 1.52568 2.65729C1.71388 2.45152 1.94295 2.28712 2.19829 2.17454C2.45364 2.06197 2.72967 2.0037 3.00882 2.00343H6.02489C6.51279 1.99864 6.9858 2.17109 7.35574 2.48863C7.72568 2.80617 7.96731 3.24714 8.0356 3.72934C8.1629 4.69271 8.39899 5.63861 8.73935 6.54899C8.87461 6.90815 8.90389 7.29847 8.82371 7.67372C8.74352 8.04897 8.55724 8.39342 8.28694 8.66624L7.01014 9.9406C8.44132 12.4527 10.5253 14.5328 13.0423 15.9612L14.3191 14.6869C14.5924 14.4171 14.9375 14.2311 15.3135 14.1511C15.6895 14.0711 16.0805 14.1003 16.4404 14.2353C17.3525 14.575 18.3002 14.8107 19.2654 14.9377C19.7538 15.0065 20.1998 15.252 20.5186 15.6276C20.8375 16.0031 21.0069 16.4826 20.9946 16.9747Z"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export const Down = ({width = 26, height = 12, color = '#000000'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 26 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M1 1L12.8421 11L25 1" stroke={color} />
    </Svg>
  );
};
export const Bag = ({width = 34, height = 32, color = '#80CD28'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 34 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.72738 30.9091C10.3299 30.9091 10.8183 30.4207 10.8183 29.8182C10.8183 29.2157 10.3299 28.7273 9.72738 28.7273C9.12489 28.7273 8.63647 29.2157 8.63647 29.8182C8.63647 30.4207 9.12489 30.9091 9.72738 30.9091Z"
        stroke="#80CD28"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21.7274 30.9091C22.3299 30.9091 22.8183 30.4207 22.8183 29.8182C22.8183 29.2157 22.3299 28.7273 21.7274 28.7273C21.1249 28.7273 20.6365 29.2157 20.6365 29.8182C20.6365 30.4207 21.1249 30.9091 21.7274 30.9091Z"
        stroke="#80CD28"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 8H5.36364L8.28727 22.6073C8.38703 23.1095 8.66026 23.5607 9.05914 23.8818C9.45802 24.2029 9.95713 24.3734 10.4691 24.3636H21.0727C21.5847 24.3734 22.0838 24.2029 22.4827 23.8818C22.8816 23.5607 23.1548 23.1095 23.2545 22.6073L25 13.4545H6.45455"
        stroke={color}
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export const PlusCircle = ({width = 35, height = 35, color = '#80CD28'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="17.5" cy="17.5" r="17" fill={color} stroke="#5EAF00" />
      <Line
        x1="9"
        y1="17.9999"
        x2="27"
        y2="17.9999"
        stroke="white"
        stroke-width="2"
      />
      <Line
        x1="18"
        y1="9.00012"
        x2="18"
        y2="27.0001"
        stroke="white"
        stroke-width="2"
      />
    </Svg>
  );
};

export const Cross = ({width = 290, height = 2, color = '#80CD28'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 311 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M0.5 1L310.5 1.00003" stroke="#BDBDBD" />
    </Svg>
  );
};

export const BoxCircle = ({width = 300, height = 2, color = '#80CD28'}) => {
  return (
    <Svg
      width="89"
      height="77"
      viewBox="0 0 89 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M88 38.5C88 59.223 71.4223 76 51 76C30.5777 76 14 59.223 14 38.5C14 17.777 30.5777 1 51 1C71.4223 1 88 17.777 88 38.5Z"
        fill="#EFEFEF"
        stroke="#BDBDBD"
        stroke-width="2"
      />
      <Rect y="0" width="71" height="52" fill="#EFEFEF" />
    </Svg>
  );
};
