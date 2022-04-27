import React, { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import {
  BottomSheetFooter,
  BottomSheetTextInput,
  useBottomSheet,
} from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { toRad } from 'react-native-redash';

// const AnimatedRectButton = Animated.createAnimatedComponent(RectButton);

const CustomFooter = ({ animatedFooterPosition }) => {
  const { bottom: bottomSafeArea } = useSafeAreaInsets();
  // extract animated index and other functionalities
  const { expand, collapse, animatedIndex } = useBottomSheet();
  //#endregion

  // create the content animated style reacting to the
  // sheet index.
  const containerAnimatedStyle = useAnimatedStyle(
    () => ({
      opacity: interpolate(
        animatedIndex.value - 0.9,
        [0.4, 1],
        [0, 1],
        Extrapolate.CLAMP
      ),
    }),
    [animatedIndex]
  );
  const containerStyle = useMemo(
    () => [containerAnimatedStyle, styles.container],
    [containerAnimatedStyle]
  );
  //#endregion

  //#region callbacks
  const handleArrowPress = useCallback(() => {
    if (animatedIndex.value === 0) {
      expand();
    } else {
      collapse();
    }
  }, [expand, collapse, animatedIndex]);
  //#endregion

  return (
    <BottomSheetFooter
      // we pass the bottom safe inset
      bottomInset={bottomSafeArea}
      // we pass the provided `animatedFooterPosition`
      animatedFooterPosition={animatedFooterPosition}
    >
      <Animated.View style={containerStyle}>
        <BottomSheetTextInput placeholder="Chat" style={styles.input} />
      </Animated.View>
    </BottomSheetFooter>
  );
};

// footer style
const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 12,
    // marginBottom: 12,
    width: '100%',
    height: 80,
    backgroundColor: '#80f',
  },
  input: {
    backgroundColor: '#F3F2F5',
    padding: 10,
  },
});

export default CustomFooter;
