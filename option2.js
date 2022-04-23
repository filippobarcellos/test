import { useRef, useMemo, useCallback } from 'react';
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetView,
  BottomSheetFooter,
  BottomSheetFlatList,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');

export default function BottomSheet1() {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [400], []);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(snapPoints);

  const data = useMemo(
    () =>
      Array(2)
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
            style={styles.input}
          />
        </View>
      </BottomSheetFooter>
    ),
    []
  );

  return (
    <View style={[styles.container, height]}>
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
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        // index={1}
        onChange={onSheetChange}
        enablePanDownToClose
        style={styles.bottomSheet}
        footerComponent={renderFooter}
        keyboardBehavior="interactive"
        keyboardBlueBehaviour={'restore'}
        shouldMeasureContentHeight={true}
      >
        <BottomSheetView style={{ height: 400 }} onLayout={handleContentLayout}>
          <View style={styles.bottomSheetHeader}>
            <Text>Score</Text>
          </View>

          <BottomSheetFlatList
            data={data}
            keyExtractor={(i) => String(i)}
            renderItem={renderItem}
            contentContainerStyle={{
              paddingVertical: 10,
            }}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
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
