import { View, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import BtnArea from './src/components/BtnArea/index.js';
import HeaderArea from './src/components/HeaderArea/index.js'
import InputArea from './src/components/InputArea/index.js';

export default function App() {

  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('./src/fonts/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-SemiBold': require('./src/fonts/PlusJakartaSans-SemiBold.ttf'),
    'PlusJakartaSans-Medium': require('./src/fonts/PlusJakartaSans-Medium.ttf'),
    'PlusJakartaSans-Regular': require('./src/fonts/PlusJakartaSans-Regular.ttf'),
    'PlusJakartaSans-Light': require('./src/fonts/PlusJakartaSans-Light.ttf'),
  });

  return (
    <View style={styles.container}>
      <HeaderArea/>
      <BtnArea BtnPrimary='Entrar na minha conta' BtnSecondary='Criar uma nova conta'/>
      <InputArea/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})