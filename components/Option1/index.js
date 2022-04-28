import { useRef, useMemo, useCallback, forwardRef, useState } from 'react';
import BottomSheet, {
  BottomSheetView,
  useBottomSheet,
} from '@gorhom/bottom-sheet';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  useSharedValue,
} from 'react-native-reanimated';

const data = Array(20)
  .fill(0)
  .map((_, index) => `Event-${index}`)
  .reverse();

const MAX_HEIGHT = Dimensions.get('window').height;

import CustomFooter from './CustomFooter';

const CustomView = ({ children }) => {
  const { animatedIndex } = useBottomSheet();

  const containerAnimatedStyle = useAnimatedStyle(
    () => ({
      maxHeight: (animatedIndex.value * MAX_HEIGHT) / 4.2,
    }),
    [animatedIndex]
  );

  return (
    <BottomSheetView
      style={[{ backgroundColor: 'red', flexGrow: 1 }, containerAnimatedStyle]}
    >
      {children}
    </BottomSheetView>
  );
};

const ChatSheet = forwardRef(({ onPreferencesOpen }, ref) => {
  const snapPoints = useMemo(() => ['14%', '35%', '50%', '90%'], []);
  // const [inputBlur, setInputBlur] = useState(false);

  const onSheetChange = (index) => {
    // index 3 - 85%
    // index 2 - 45%
    // index 1 - 25%
  };

  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );

  return (
    <BottomSheet
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      onChange={onSheetChange}
      enablePanDownToClose
      style={[styles.bottomSheet]}
      footerComponent={CustomFooter}
      keyboardBehavior="extend"
      keyboardBlurBehavior={'restore'}
    >
      <CustomView>
        <View style={styles.bottomSheetHeader}>
          <Text>Score</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(i) => String(i)}
          renderItem={renderItem}
          style={{ flexGrow: 1 }}
          inverted
          contentContainerStyle={{
            paddingTop: 40,
          }}
        />
      </CustomView>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  bottomSheet: {
    paddingVertical: 20,
  },
  bottomSheetHeader: {
    width: '100%',
    height: 60,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSheetChat: {
    padding: 20,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
});

export default ChatSheet;

{
  /* <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={onSheetChange}
          enablePanDownToClose
          style={styles.bottomSheet}
          footerComponent={CustomFooter}
          keyboardBehavior="extend"
          keyboardBlurBehavior="restore"
        >
          <View style={styles.bottomSheetHeader}>
            <Text>Score</Text>
          </View>

          <FlatList
            data={data}
            keyExtractor={(i) => String(i)}
            renderItem={renderItem}
            inverted
            style={{ marginBottom: 20 }}
            contentContainerStyle={{
              paddingTop: 10,
            }}
          />
        </BottomSheet> */
}
