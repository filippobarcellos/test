import { useRef } from 'react';
import BottomSheet from 'react-native-bottomsheet-reanimated';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SNAP_POINTS = ['0%', '60%', '80%'];

export default function GoalSheet() {
  const sheetRef = useRef();

  return (
    <BottomSheet
      keyboardAware={false}
      bottomSheerColor="#FFFFFF"
      ref={sheetRef}
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
          <TouchableOpacity onPress={() => console.log('clicou')}>
            <Text>Open</Text>
          </TouchableOpacity>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'pink',
    alignItems: 'center',
  },
});
