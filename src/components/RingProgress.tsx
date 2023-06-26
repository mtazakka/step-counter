import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Circle, Svg } from 'react-native-svg';

type Props = {
  radius?: number;
  strokeWidth?: number;
  progress?: number;
};
const color = '#EE0F55';

const RingProgress = ({ radius = 100, strokeWidth = 35, progress }: Props) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  return (
    <View
      style={{
        width: radius * 2,
        height: radius * 2,
        alignSelf: 'center',
      }}
    >
      <Svg>
        {/* Background */}
        <Circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          // fill={'black'}
          stroke={color}
          strokeWidth={strokeWidth}
          opacity={0.2}
          // rotation='-90'
        />

        {/* Foreground */}
        <Circle
          r={innerRadius}
          cx={radius}
          cy={radius}
          originX={radius}
          originY={radius}
          // fill={'black'}
          stroke={color}
          strokeWidth={35}
          strokeDasharray={[circumference * progress, circumference]}
          strokeLinecap='round'
          rotation='-90'
        />
      </Svg>
    </View>
  );
};

export default RingProgress;

const styles = StyleSheet.create({});
