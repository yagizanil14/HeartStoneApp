import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { searchPages } from './pages'
import { Provider } from 'react-redux'
import { store } from '../index'
import mechanics from './pages/mechanics'
import card from './pages/card'

const Rooter = () => {
    const Stack = createStackNavigator()
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="mechanics" component={mechanics} />
                    <Stack.Screen name="card" component={card} />
                    <Stack.Screen name="searchPages" component={searchPages} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
export default Rooter