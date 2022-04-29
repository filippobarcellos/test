import { useRef, useImperativeHandle, forwardRef } from 'react';
import BottomSheet from 'react-native-bottomsheet-reanimated';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SNAP_POINTS = ['0%', '60%', '80%'];

const GoalSheet = forwardRef(({ onExpand }, ref) => {
  const bottomSheetRef = useRef(null);

  useImperativeHandle(ref, () => ({
    expand: () => bottomSheetRef.current.snapTo(2),
    collapse: () => bottomSheetRef.current.snapTo(1),
    close: () => bottomSheetRef.current.snapTo(0),
  }));

  return (
    <BottomSheet
      keyboardAware={false}
      bottomSheerColor="#FFFFFF"
      ref={bottomSheetRef}
      initialPosition={'60%'}
      snapPoints={SNAP_POINTS}
      containerStyle={{
        borderRadius: 40,
        borderTopLeftRadius: 12,
        shadowColor: '#FFFFFF',
      }}
      isBackDrop={false}
      isBackDropDismissByPress={true}
      isRoundBorderWithTipHeader={true}
      body={
        <View style={styles.container}>
          <Text>Goal Sheet</Text>
          <TouchableOpacity onPress={onExpand}>
            <Text>Open</Text>
          </TouchableOpacity>
        </View>
      }
    />
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'pink',
    alignItems: 'center',
  },
});

export default GoalSheet;
