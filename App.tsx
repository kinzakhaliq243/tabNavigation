

import { NavigationContainer } from '@react-navigation/native';

import { TabNavigation } from './src/Navigation';
import { DrawerNavigator } from './src/Navigation';


 export const App =()=> {
  return (
    <>
   { <TabNavigation/>  }
  {/* <DrawerNavigator/> */}
    </>
    
  );
}
