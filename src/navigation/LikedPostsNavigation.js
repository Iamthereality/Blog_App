import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { postsNavigationOptions } from "./postsNavigationOptions";

import { LikedScreen } from "../Screens/LikedScreen";
import { PostScreen } from "../Screens/PostScreen";

const LikedNavigation = createStackNavigator();
export const LikedPostsNavigation = () => (
    <LikedNavigation.Navigator
        initialRouteName={ 'LikedScreen' }
        screenOptions={ postsNavigationOptions }
    >
        <LikedNavigation.Screen
            name={ 'LikedScreen' }
            component={ LikedScreen }
        />
        <LikedNavigation.Screen
            name={ 'PostScreen' }
            component={ PostScreen }
        />
    </LikedNavigation.Navigator>
);