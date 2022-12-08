import { StatusBar } from 'react-native';
import { HomePage } from './src/screens/home';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <HomePage/>
    </>
  );
}
