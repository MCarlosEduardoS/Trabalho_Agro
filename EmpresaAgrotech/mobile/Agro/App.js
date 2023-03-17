import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FrotasCadastroScreen from './screens/FrotasCadastroScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Principal" component={FrotasCadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
