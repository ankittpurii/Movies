import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { MoviesList } from '../components/screens';
import MovieDetailsScreen from '../components/screens/MovieDetailsScreen';


const Stack = createNativeStackNavigator();
/**
 * Main App Screens Stack
 */
const MainStack = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen name="MoviesList" component={MoviesList} options={{
                    headerTitle: "Movies"
                }} />
                <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen}
                    options={{
                        headerTitle: "Movie Details"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;