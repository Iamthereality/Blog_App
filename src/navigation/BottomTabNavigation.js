import React from 'react';

import { Ionicons } from "@expo/vector-icons";

import { createMaterialTopTabNavigator  } from "@react-navigation/material-top-tabs";

import { AllPostsNavigation } from "./AllPostsNavigation";
import { LikedPostsNavigation } from "./LikedPostsNavigation";

const BottomNavigation = createMaterialTopTabNavigator();
export const BottomTabNavigation = () => (
    <BottomNavigation.Navigator
        initialRouteName={ 'postNavigation' }
        tabBarPosition={ 'bottom' }
    >
        <BottomNavigation.Screen
            name={ 'all posts' }
            component={ AllPostsNavigation }
            options={ {
                showIcon: true,
                tabBarIcon: () => (
                    <Ionicons
                        name={ 'ios-albums' }
                        size={ 24 }
                    />
                )
            } }
        />
        <BottomNavigation.Screen
            name={ 'liked posts' }
            component={ LikedPostsNavigation }
            options={ {
                showIcon: true,
                tabBarIcon: () => (
                    <Ionicons
                        name={ 'ios-albums' }
                        size={ 24 }
                    />
                )
            } }
        />
    </BottomNavigation.Navigator>
);