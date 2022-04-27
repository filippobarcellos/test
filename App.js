import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BottomSheet1 from './components/BottomSheet/index';
// import BottomSheet1 from './components/Option1/index';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'pink' }}>
        <BottomSheet1 />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
