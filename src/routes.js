import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import terms from './terms/terms.json';

const AppStack = createStackNavigator();

import ForecastDashboard from './pages/Forecast/ForecastDashboard';
import Citys from './pages/Citys/Citys';

export default function Routes(){

    return(
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="Citys">

                <AppStack.Screen name="Forecast" 
                    component={ ForecastDashboard } 
                    options={{
                        title: terms.weatherForecast,
                        headerTitle: terms.weatherForecast,
                        headerStyle: {
                            backgroundColor: '#87CEEB', 
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 22,
                            fontWeight: 'bold',
                        }
                    }}
                />

                <AppStack.Screen name="Citys" 
                    component={ Citys }
                    options={{
                        title: terms.weatherForecast,
                        headerTitle: terms.city + "s",
                        headerStyle: {
                            backgroundColor: '#87CEEB', 
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 22,
                            fontWeight: 'bold',
                        }
                    }}
                />

            </AppStack.Navigator>
        </NavigationContainer>
    );
}