import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './src/components/TabNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return <TabNavigation />;
}
