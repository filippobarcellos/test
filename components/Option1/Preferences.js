import { useRef, useMemo, forwardRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

const MAX_HEIGHT = Dimensions.get('window').height;

const PreferencesSheet = forwardRef(({ onClose }, ref) => {
  const snapPoints = useMemo(() => ['90%'], []);

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      style={[styles.bottomSheet]}
    >
      <BottomSheetView style={{ backgroundColor: 'white', height: '100%' }}>
        <TouchableOpacity
          style={{ backgroundColor: 'green', padding: 20 }}
          onPress={onClose}
        >
          <Text>Close Preferences</Text>
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

export default PreferencesSheet;
