import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Movies from './components/Movies';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Details from './components/Details';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const MainStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{headerShown:false}} name="Movies" component={Movies} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerStyle:{backgroundColor:"green"}}}>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Movies' component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
