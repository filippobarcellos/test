import { GestureHandlerRootView } from 'react-native-gesture-handler';

import BottomSheet1 from './option1';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheet1 />
    </GestureHandlerRootView>
  );
}
