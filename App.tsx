import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Groups } from '@screens/Groups';

import theme from './src/theme'


export default function App() {
  const [ fontsLoader ] = useFonts({  
      Roboto_400Regular,
      Roboto_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      { fontsLoader ? <Groups /> : <ActivityIndicator size="large" color="#000" />}
    </ThemeProvider>
  );
}
