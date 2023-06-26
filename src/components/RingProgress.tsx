import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Circle, Svg } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type Props = {
  radius?: number;
  strokeWidth?: number;
  progress?: number;
};
const color = '#EE0F55';

const RingProgress = ({
  radius = 100,
  strokeWidth = 35,
  progress = 1,
}: Props) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const fill = useSharedValue(0);

  useEffect(() => {
    fill.value = withTiming(progress, { duration: 1500 });
  }, [progress]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * fill.value, circumference],
  }));

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
        <AnimatedCircle
          animatedProps={animatedProps}
          r={innerRadius}
          cx={radius}
          cy={radius}
          originX={radius}
          originY={radius}
          stroke={color}
          strokeWidth={35}
          strokeLinecap='round'
          rotation='-90'
        />
      </Svg>
    </View>
  );
};

export default RingProgress;

const styles = StyleSheet.create({});
