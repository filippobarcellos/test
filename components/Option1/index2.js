import { useRef, useMemo, forwardRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

const MAX_HEIGHT = Dimensions.get('window').height;

const GoalSheet = forwardRef(({ onOpen, onClose }, ref) => {
  const snapPoints = useMemo(() => ['50%', '90%'], []);

  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose
      style={[styles.bottomSheet]}
    >
      <BottomSheetView style={{ backgroundColor: 'red', height: '100%' }}>
        <TouchableOpacity
          style={{ backgroundColor: 'blue', padding: 20 }}
          onPress={onOpen}
        >
          <Text>Open Goal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: 'green', padding: 20 }}
          onPress={onClose}
        >
          <Text>Close Goal</Text>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  bottomSheet: {
    paddingVertical: 20,
  },
});

export default GoalSheet;
