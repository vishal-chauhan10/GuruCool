import React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconHome({props, width, height, stroke}) {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M27.5 25v-9.783a5 5 0 00-1.566-3.635l-9.216-8.71a2.5 2.5 0 00-3.435 0l-9.217 8.71A5 5 0 002.5 15.217V25A2.5 2.5 0 005 27.5h20a2.5 2.5 0 002.5-2.5z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default IconHome;
