import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';

import Pallet from './components/pallet';

const App = () => {
  const lightness = Array(101)
    .fill()
    .map((x, i) => i);

  const [H, updateH] = useState(0);
  const [S, updateS] = useState(100);
  const [L, updateL] = useState(0);

  return (
    <SafeAreaView>
      <View className="inputContainer" style={styles.inputContainer}>
        <TextInput
          className="input"
          placeholder="H"
          style={styles.input}
          value={H}
          onChangeText={val =>
            parseInt(val) <= 255
              ? updateH(parseInt(val))
              : val == ''
              ? updateH(0)
              : ''
          }
        />
        <TextInput
          className="input"
          placeholder="S"
          style={styles.input}
          value={S}
          onChangeText={val =>
            parseInt(val) <= 100
              ? updateS(parseInt(val))
              : val == ''
              ? updateS(0)
              : ''
          }
        />
        <TextInput
          className="input"
          placeholder="L"
          style={styles.input}
          onChangeText={val =>
            parseInt(val) <= 100
              ? updateL(parseInt(val))
              : val == ''
              ? updateL(0)
              : ''
          }
        />
      </View>
      <FlatList
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        data={lightness}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Pallet L={item} H={H} S={S} selected={item == L ? true : false} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  input: {
    fontSize: 16,
    fontWeight: '600',
    color: 'grey',
    margin: 20,
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
});

export default App;
