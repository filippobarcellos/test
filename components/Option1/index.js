import { useRef, useMemo, useCallback } from 'react';
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
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

const MAX_HEIGHT = Dimensions.get('window').height;

import CustomFooter from './CustomFooter';

export default function BottomSheet1() {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['14%', '35%', '50%', '90%'], []);
  // const [inputBlur, setInputBlur] = useState(false);

  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `Event-${index}`),
    []
  ).reverse();

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

  // useEffect(() => {
  //   if (inputBlur) {
  //     bottomSheetRef.current.snapToIndex(1);
  //   }
  // }, [inputBlur]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>App</Text>
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
        style={[styles.bottomSheet]}
        footerComponent={CustomFooter}
        keyboardBehavior="extend"
        keyboardBlurBehavior={'restore'}
      >
        <BottomSheetView style={{ height: '100%' }}>
          <View style={styles.bottomSheetHeader}>
            <Text>Score</Text>
          </View>

          <View style={{ height: '100%' }}>
            <FlatList
              data={data}
              keyExtractor={(i) => String(i)}
              renderItem={renderItem}
              inverted
              style={{ marginBottom: 80 }}
              contentContainerStyle={{
                paddingTop: 40,
              }}
            />
          </View>
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
