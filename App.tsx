import { StatusBar } from 'expo-status-bar';
import React , { useEffect } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Home from './src/page/Home'
import * as Updates from 'expo-updates';

export default function App() {
  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync(); // depende da sua estratégia
      }
    }
    updateApp();
  }, []);

  return (
    <Home/>
  );
}