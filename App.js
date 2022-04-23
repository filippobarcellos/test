import { GestureHandlerRootView } from 'react-native-gesture-handler';

import BottomSheet1 from './option1';
import BottomSheet from './BottomSheet';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheet />
    </GestureHandlerRootView>
  );
}
