import React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigationRef} from '../utils/hooks/useNavigationRef';
import {Platform} from 'react-native';
import Colors from '../utils/theme/Colors';
import BackButton from '../components/common/buttons/backButton/BackButton';
import InputScreen from '../screens/home/InputScreen';
import DisplayScreen from '../screens/details/DisplayScreen';

export default Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer ref={useNavigationRef} theme={DarkTheme}>
      <Stack.Navigator
        screenOptions={{
          presentation: Platform.OS === 'android' ? 'transparentModal' : 'card',
        }}>
        <Stack.Screen
          name="InputScreen"
          component={InputScreen}
          options={{
            headerTitle: 'Input Screen',
            headerStyle: {
              backgroundColor: Colors.background,
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="DisplayScreen"
          component={DisplayScreen}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: Colors.background,
            },
            headerShadowVisible: false,
            headerLeft: props => (
              <BackButton {...props} title={'Display Screen'} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
