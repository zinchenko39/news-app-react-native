import { View, StatusBar } from 'react-native';
import { Home } from './screens/Home';

export default function App() {
  return (
    <View>
      <Home />
      <StatusBar theme="auto" />
    </View>
  );
}
