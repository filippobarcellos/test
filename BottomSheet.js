import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const data = Array(40)
  .fill(0)
  .map((_, index) => `Event-${index}`);

export default function BottomSheet() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      enabled={false}
      //trocar aqui
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Score</Text>
        </View>

        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1, width: '100%', flex: 1 }}
          style={{ width: '100%' }}
          extraHeight={160}
          enableAutomaticScroll={true}
          keyboardShouldPersistTaps="handled"
          scrollEnabled={false}
          nestedScrollEnabled={true}
        >
          <FlatList
            style={{ flex: 1, width: '100%' }}
            data={data}
            keyExtractor={(i) => String(i)}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text>{item}</Text>
              </View>
            )}
          />
          <View style={[styles.inputContainer]}>
            <TextInput placeholder="Chat" style={styles.input} />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 800,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 'auto',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  header: {
    width: '100%',
    backgroundColor: '#012BF6',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
