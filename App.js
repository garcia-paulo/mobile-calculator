import React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './src/styles/global'

import HomePage from './src/pages';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomePage></HomePage>
    </SafeAreaView>
  );
}
