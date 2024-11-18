
import { createDrawerNavigator } from '@react-navigation/drawer';
import Lock2Screen from '../../Screen/Lock2/Lock2';
import LockScreen from '../../Screen/Lock/Lock';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name=" Lock" component={LockScreen} />
      <Drawer.Screen name="Lock2" component={Lock2Screen} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}