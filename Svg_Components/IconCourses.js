import React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent({props, width, height, stroke}) {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15 6.563V26.25m0-19.688S8.437.939 1.875 5.625V26.25c6.563-4.688 13.125 0 13.125 0s6.563-4.688 13.125 0V5.625C21.562.938 15 6.563 15 6.563z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
