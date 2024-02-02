import React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigationRef} from '../utils/hooks/useNavigationRef';
import {Platform} from 'react-native';
import Colors from '../utils/theme/Colors';
import BackButton from '../components/common/buttons/backButton/BackButton';
import ScreenA from '../screens/home/ScreenA';
import ScreenB from '../screens/details/ScreenB';

export default Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer ref={useNavigationRef} theme={DarkTheme}>
      <Stack.Navigator
        screenOptions={{
          presentation: Platform.OS === 'android' && 'transparentModal',
        }}>
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          options={{
            headerTitle: 'Screen A',
            headerStyle: {
              backgroundColor: Colors.background,
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="ScreenB"
          component={ScreenB}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: Colors.background,
            },
            headerShadowVisible: false,
            headerLeft: props => <BackButton {...props} title={'Screen B'} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
