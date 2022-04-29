import { useRef, useState } from 'react';
import BottomSheet from 'react-native-bottomsheet-reanimated';
import { KeyboardScrollView } from 'react-native-avoiding-keyboard-scroll-view';

import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const data = Array(20)
  .fill(0)
  .map((_, index) => `Event-${index}`);

const SNAP_POINTS = ['0%', '12', '25%', '50%', '80%'];

export default function BottomSheet1() {
  const sheetRef = useRef();
  const [avoidNative, setAvoidNative] = useState(true);

  // function onSnapChange(index) {
  //   sheetRef?.current.snapTo(index);
  // }

  // imperative handle collape close

  function onClose() {
    sheetRef?.current.dismissBottomSheet();
  }

  function onSnapChange(data) {
    setAvoidNative(data.index === 4 ? false : true);
  }

  return (
    <BottomSheet
      keyboardAware={avoidNative} // change here
      bottomSheerColor="#FFFFFF"
      ref={sheetRef}
      initialPosition={'50%'}
      onChangeSnap={onSnapChange}
      snapPoints={SNAP_POINTS}
      containerStyle={{
        borderRadius: 40,
        borderTopLeftRadius: 12,
        shadowColor: '#FFFFFF',
      }}
      isBackDrop={false}
      isBackDropDismissByPress={true}
      isRoundBorderWithTipHeader={true}
      header={
        <View style={styles.header}>
          <Text style={styles.title}>Score</Text>
        </View>
      }
      body={
        <KeyboardScrollView
          keyboardViewOffset={30}
          renderBottomComponent={() => (
            <View style={[styles.inputContainer]}>
              <TextInput placeholder="Chat" style={styles.input} />
            </View>
          )}
        >
          {data.map((e) => (
            <View style={styles.item} key={e}>
              <Text>{e}</Text>
            </View>
          ))}
        </KeyboardScrollView>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#012BF6',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'red',
    marginBottom: 0,
    padding: 20,
    paddingBottom: 50,
    position: 'absolute',
    bottom: 0,
  },
  input: {
    backgroundColor: '#F3F2F5',
    padding: 10,
    marginTop: 'auto',
  },
  item: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
});
