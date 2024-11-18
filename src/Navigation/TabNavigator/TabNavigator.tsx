import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, SettingScreen } from "../../Screen"
import ProfileScreen from '../../Screen/Profile/Profile';
import DetailsScreen from '../../Screen/Details/Details';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();
export const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={
        {
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: 'black',
          }
      }>
        <Tab.Screen name="Home" component={HomeScreen}
          options={
            {
              tabBarIcon: ({ focused, color, size }) => (
                <Icon name={"home"} size={24} color={focused ? 'blue' : 'gray'} />

              ),
            }
          } />
        <Tab.Screen name="setting" component={SettingScreen}
          options={
            {
              tabBarIcon: ({ color, focused, size }) => (
                <Icon2 name={"setting"} size={24} color={focused ? 'blue' : 'gray'} />),
              tabBarBadge: 2,
              tabBarBadgeStyle: {
                color: 'black',          // Text color
                backgroundColor: 'yellow',  // Badge background color
                fontSize: 12,
                fontWeight: 'bold',
              }

            }
          }

        />
        <Tab.Screen name="profile" component={ProfileScreen}
          options={
            {
              tabBarIcon: ({ focused, color, size }) => (
                <Icon3 name={"profile"} size={24} color={focused ? 'blue' : 'gray'} />
              ),
            }}

        />
        <Tab.Screen name='details' component={DetailsScreen}
          options={
            {
              tabBarIcon: ({ focused, color, size }) => (
                <Icon4 name={"details"} size={24} color={focused ? 'blue' : 'gray'} />
              ),
            }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 