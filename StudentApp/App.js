import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { registerRootComponent } from 'expo';
import Home from './src/components/Home';
import ReportIncident from './src/components/ReportIncident';
import MyReports from './src/components/MyReports';
import EmergencyContacts from './src/components/EmergencyContacts';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Report') iconName = 'report-problem';
            else if (route.name === 'MyReports') iconName = 'assignment';
            else if (route.name === 'Emergency') iconName = 'phone';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#667eea',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Report" component={ReportIncident} />
        <Tab.Screen name="MyReports" component={MyReports} options={{ title: 'My Reports' }} />
        <Tab.Screen name="Emergency" component={EmergencyContacts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
export default App;
