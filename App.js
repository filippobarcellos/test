import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet, Text } from 'react-native';
import { useRef } from 'react';

import BottomSheet1 from './components/BottomSheet/index';
import GoalSheet from './components/BottomSheet/GoalSheet';

// import ChatSheet from './components/Option1/index';
// import GoalSheet from './components/Option1/index2';
// import PreferencesSheet from './components/Option1/Preferences';

export default function App() {
  const chatSheetRef = useRef(null);
  const goalSheetRef = useRef(null);
  const preferencesSheetRef = useRef(null);

  // const onGoalSheetOpen = () => {
  //   goalSheetRef.current.expand();
  //   chatSheetRef.current.close();
  // };

  // const onGoalSheetClose = () => {
  //   goalSheetRef.current.collapse();
  //   chatSheetRef.current.snapToIndex(1);
  // };

  // const onPreferencesOpen = () => {
  //   preferencesSheetRef.current.expand();
  // };

  // const onPreferencesClose = () => {
  //   preferencesSheetRef.current.close();
  // };

  const onGoalSheetOpen = () => {
    goalSheetRef.current.expand();
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>App</Text>
        </View>
      </View>
      <GoalSheet
        ref={goalSheetRef}
        onExpand={onGoalSheetOpen}
        // onOpen={onGoalSheetOpen}
        // onClose={onGoalSheetClose}
      />
      <BottomSheet1 ref={chatSheetRef} />
      {/* <PreferencesSheet
          ref={preferencesSheetRef}
          onClose={onPreferencesClose}
        /> */}
    </SafeAreaProvider>
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
});
