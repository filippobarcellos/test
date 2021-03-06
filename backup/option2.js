import { useRef, useMemo, useCallback, useState, useEffect } from 'react';
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetFooter,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  NativeViewGestureHandler,
  FlatList,
} from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');

export default function BottomSheet1() {
  const bottomSheetRef = useRef(null);
  const flatListRef = useRef();
  const snapPoints = useMemo(() => ['14%', '35%', '50%', '90%'], []);
  const [focus, setFocus] = useState(false);
  const [height, setHeight] = useState('100%');

  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `Event-${index}`),
    []
  );

  const onSheetChange = (index) => {
    console.log({ index });
  };

  const onSheetOpen = () => {
    bottomSheetRef.current.snapToIndex(2);
  };

  const onSheetCollapse = () => {
    bottomSheetRef.current.collapse();
  };

  const onSheetClose = () => {
    bottomSheetRef.current.close();
  };

  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );

  const renderFooter = useCallback(
    (props) => (
      <BottomSheetFooter
        {...props}
        bottomInset={2}
        style={{ backgroundColor: 'white' }}
      >
        <View style={styles.inputContainer}>
          <BottomSheetTextInput
            placeholder="Chat to the Circl"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            style={styles.input}
          />
        </View>
      </BottomSheetFooter>
    ),
    []
  );

  useEffect(() => {
    if (focus) {
      setHeight(346);
      flatListRef.current.scrollToEnd();
    } else {
      setHeight('100%');
    }
  }, [focus]);

  return (
    <NativeViewGestureHandler disallowInterruption={true}>
      <View style={[styles.container]}>
        <View style={styles.header}>
          <Text style={styles.title}>Circl</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={onSheetOpen} style={styles.button}>
            <Text>Expand</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onSheetCollapse} style={styles.button}>
            <Text>Collapse</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSheetClose} style={styles.button}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>

        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={onSheetChange}
          enablePanDownToClose
          style={styles.bottomSheet}
          footerComponent={renderFooter}
          keyboardBehavior="extend"
          keyboardBlurBehavior={'restore'}
        >
          <View style={styles.bottomSheetHeader}>
            <Text>Score</Text>
          </View>

          <View style={{ backgroundColor: 'red', height: 346 }}>
            <FlatList
              ref={flatListRef}
              data={data}
              keyExtractor={(i) => String(i)}
              renderItem={renderItem}
              contentContainerStyle={{
                paddingVertical: 10,
              }}
            />
          </View>
        </BottomSheet>
      </View>
    </NativeViewGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020018',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#012BF6',
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  inputContainer: {
    width: '100%',
    height: 80,
    marginTop: 'auto',
    marginBottom: 20,
    padding: 20,
  },
  input: {
    backgroundColor: '#F3F2F5',
    padding: 10,
  },
  buttons: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#FFBD13',
    marginRight: 10,
  },
  bottomSheet: {
    paddingVertical: 20,
    flex: 1,
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
