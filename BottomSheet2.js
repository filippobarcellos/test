import { useRef, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  ScrollView,
} from 'react-native';
import useKeyboard from './useKeyboard';

const data = Array(20)
  .fill(0)
  .map((_, index) => `Event-${index}`);

export default function BottomSheet() {
  const { visible, keyboardHeight } = useKeyboard();

  const flatListRef = useRef();

  console.log({ keyboardHeight });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      enabled={true}
    >
      <View style={[styles.header]}>
        <Text style={styles.title}>Score</Text>
      </View>
      <ScrollView
        style={{ width: '100%' }}
        // contentContainerStyle={{ flexGrow: 1, flex: 1 }}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={true}
      >
        {data.map((d, i) => (
          <View style={styles.item}>
            <Text>{d}</Text>
          </View>
        ))}

        <View style={[styles.inputContainer]}>
          <TextInput placeholder="Chat" style={styles.input} />
        </View>
      </ScrollView>
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
    height: 80,
    backgroundColor: 'red',
    padding: 20,
    marginTop: 'auto',
  },
  input: {
    backgroundColor: '#F3F2F5',
    padding: 10,
  },
  item: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
});
