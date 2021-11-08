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
        d="M17.5 2.917C9.446 2.917 2.917 9.446 2.917 17.5S9.446 32.083 17.5 32.083 32.083 25.554 32.083 17.5 25.554 2.917 17.5 2.917z"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.229 26.755s3.25-4.15 11.271-4.15c8.02 0 11.273 4.15 11.273 4.15M17.5 17.5a4.375 4.375 0 100-8.75 4.375 4.375 0 000 8.75v0z"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
