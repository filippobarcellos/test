import { useRef } from 'react';
import BottomSheet from 'react-native-bottomsheet-reanimated';

import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

import {
  KeyboardAwareScrollView,
  KeyboardAwareFlatList,
  KeyboardAwareView,
} from 'react-native-keyboard-aware-scroll-view';

const data = Array(40)
  .fill(0)
  .map((_, index) => `Event-${index}`);

export default function BottomSheet1() {
  const sheetRef = useRef();

  return (
    <BottomSheet
      keyboardAware={false} // change here
      bottomSheerColor="#FFFFFF"
      ref={sheetRef}
      initialPosition={'50%'} //200, 300
      snapPoints={['50%', '80%']}
      onChangeSnap={(data) => console.log(data)}
      isBackDrop={false}
      isBackDropDismissByPress={true}
      isRoundBorderWithTipHeader={true}
      header={
        <View style={styles.header}>
          <Text style={styles.title}>Score</Text>
        </View>
      }
      body={
        <KeyboardAwareView>
          <KeyboardAwareFlatList
            contentContainerStyle={{
              width: '100%',
              flexGrow: 1,
              justifyContent: 'space-between',
            }}
            style={{ width: '100%' }}
            extraHeight={260}
            keyboardAwareExtraSnapHeight={100}
            enableAutomaticScroll={true} // change here
            // keyboardShouldPersistTaps="handled"
            scrollEnabled={true}
            data={data}
            keyExtractor={(index) => String(index)}
            ListFooterComponent={
              <View style={[styles.inputContainer]}>
                <TextInput placeholder="Chat" style={styles.input} />
              </View>
            }
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text>{item}</Text>
              </View>
            )}
          />
        </KeyboardAwareView>
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
    marginBottom: 20,
    padding: 20,
    marginTop: 'auto',
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

//scroll view
// stickyHeaderIndices={[0]}
//           // invertStickyHeaders={true}
//           inverted
