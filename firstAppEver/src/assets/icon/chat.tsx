import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number | string;
  width?: number | string;
  color?: string;
  others?: any;
}

export const Chat: React.FC<Props> = ({
  height,
  width,
  color = '#200E32',
  ...others
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...others}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.485 6.486 2 12 2s10 4.485 10 10c0 5.514-4.486 10-10 10a9.939 9.939 0 01-7.927-3.902.727.727 0 011.152-.888A8.492 8.492 0 0012 20.546c4.712 0 8.545-3.833 8.545-8.546 0-4.712-3.833-8.546-8.545-8.546S3.454 7.288 3.454 12c0 .438.033.873.098 1.299a.728.728 0 01-1.438.22A10.1 10.1 0 012 11.999zm5.52-1.196c.661 0 1.198.537 1.198 1.196a1.199 1.199 0 01-2.396 0c0-.66.538-1.196 1.198-1.196zm4.48 0c.66 0 1.198.537 1.198 1.196a1.2 1.2 0 01-2.396 0c0-.66.537-1.196 1.198-1.196zM17.677 12a1.198 1.198 0 00-2.396 0 1.2 1.2 0 002.396 0z"
        fill={color}
      />
    </Svg>
  );
};
