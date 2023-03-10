import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

// import { Group } from '@screens/Group';
import { Loading } from '@components/Loading'

import theme from './src/theme'
import { Routes } from '@routes/index'


export default function App() {
  const [ fontsLoader ] = useFonts({  
      Roboto_400Regular,
      Roboto_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      { fontsLoader ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
