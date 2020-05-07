import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { postsNavigationOptions } from "./postsNavigationOptions";

import { AboutScreen } from "../Screens/AboutScreen";

const AboutNavigation = createStackNavigator();
export const AboutAppNavigation = () => (
    <AboutNavigation.Navigator
        screenOptions={ postsNavigationOptions }
    >
        <AboutNavigation.Screen
            name={ 'AboutScreen' }
            component={ AboutScreen }
        />
    </AboutNavigation.Navigator>
);