/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useCallback } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Caver from 'caver-js';

const App = () => {
  const onPress = useCallback(() => {
    const caver = new Caver();
    console.log('onPress');
  }, []);

  return (
    <View style={styles.container}>
      <Button title={'TEST APP'} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
