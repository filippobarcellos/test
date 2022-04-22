import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native';

import {
  KeyboardAwareScrollView,
  KeyboardAwareFlatList,
} from 'react-native-keyboard-aware-scroll-view';

const data = Array(50)
  .fill(0)
  .map((_, index) => `Event-${index}`);

export default function BottomSheet() {
  return (
    <View style={styles.container}>
      <KeyboardAwareFlatList
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{ width: '100%' }}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.title}>Score</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={[styles.inputContainer, { paddingBottom: 20 }]}>
            <TextInput placeholder="Chat" style={styles.input} />
          </View>
        )}
        data={data}
        keyExtractor={(i) => String(i)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
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

{
  /* <KeyboardAwareScrollView
        scrollEnabled={false}
        contentContainerStyle={{
          flexGrow: 1,
          flex: 1,
          width: '100%',
          backgroundColor: 'pink',
        }}
      >
        <FlatList
          style={[styles.keyboardAware, { flex: 1 }]}
          data={data}
          keyExtractor={(i) => String(i)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
        />
        <View style={styles.inputContainer}>
          <TextInput placeholder="Chat" style={styles.input} />
        </View>
      </KeyboardAwareScrollView> */
}

{
  /* <KeyboardAwareFlatList
        style={styles.keyboardAware}
        data={data}
        keyExtractor={(i) => String(i)}
        ListFooterComponent={() => (
          <View style={styles.inputContainer}>
            <TextInput placeholder="Chat" style={styles.input} />
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        )}
      /> */
}

{
  /* <KeyboardAwareScrollView
  style={{ width: '100%' }}
  contentContainerStyle={{
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'pink',
  }}
>
  <FlatList
    style={{ flex: 1 }}
    stickyHeaderIndices={[0]}
    ListHeaderComponent={() => (
      <View style={styles.header}>
        <Text style={styles.title}>Score</Text>
      </View>
    )}
    data={data}
    keyExtractor={(i) => String(i)}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Text>{item}</Text>
      </View>
    )}
  />
  <View style={[styles.inputContainer, { paddingBottom: 20 }]}>
    <TextInput placeholder="Chat" style={styles.input} />
  </View>
</KeyboardAwareScrollView>; */
}
