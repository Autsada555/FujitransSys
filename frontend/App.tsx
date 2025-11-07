import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookingScreen from './src/pages/Bookingcar';
import HistoryScreen from './src/pages/History';
import ProfileScreen from './src/pages/Profile';
import DashboardScreen from './src/pages/Dashboard';
import Layout from './src/components/Layout';

const Stack = createNativeStackNavigator();

const withLayout = (Component: React.ComponentType<any>) => {
  return (props: any) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Booking" component={withLayout(BookingScreen)} />
        <Stack.Screen name="History" component={withLayout(HistoryScreen)} />
        <Stack.Screen name="Profile" component={withLayout(ProfileScreen)} />
        <Stack.Screen name="Dashboard" component={withLayout(DashboardScreen)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}