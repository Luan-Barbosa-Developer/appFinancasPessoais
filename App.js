import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth';

import Routes from './src/routes';

export default function App() {
  return (

      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor='#f0f4ff' barStyle='dark-content'/>
          <Routes/>
        </AuthProvider>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
