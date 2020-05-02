import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { postsNavigationOptions } from "./postsNavigationOptions";

import { MainScreen } from "../Screens/MainScreen";
import { PostScreen } from "../Screens/PostScreen";

const PostNavigation = createStackNavigator();
export const AllPostsNavigation = () => (
    <PostNavigation.Navigator
        initialRouteName={ 'MainScreen' }
        screenOptions={ postsNavigationOptions }
    >
        <PostNavigation.Screen
            name={ 'MainScreen' }
            component={ MainScreen }
        />
        <PostNavigation.Screen
            name={ 'PostScreen' }
            component={ PostScreen }
        />
    </PostNavigation.Navigator>
);