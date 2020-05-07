import React from 'react';

import { Ionicons } from "@expo/vector-icons";

import { createMaterialBottomTabNavigator  } from "@react-navigation/material-bottom-tabs";

import { AllPostsNavigation } from "./AllPostsNavigation";
import { LikedPostsNavigation } from "./LikedPostsNavigation";

import { THEME } from "../styles/styles";

const BottomNavigation = createMaterialBottomTabNavigator ();

const tab = (iconName) => {
    return (
        {
            labelStyle: {
                fontFamily: 'open-regular',
                fontSize: 10,
                textTransform: 'capitalize',
                marginVertical: 0,
                color: '#000000'
            },
            tabBarColor: '#FFFFFF',
            tabBarIcon: (info) => {
                return (
                    <Ionicons
                        name={ iconName }
                        size={ 24 }
                        color={ info.color }
                    />
                )
            }
        }
    );
};

export const BottomTabNavigation = () => (
    <BottomNavigation.Navigator
        initialRouteName={ 'postNavigation' }
        shifting={ true }
        activeColor={ THEME.MAIN_COLOR }
        inactiveColor={ 'rgba(48, 63, 159, 0.5)' }
    >
        <BottomNavigation.Screen
            name={ 'All posts' }
            component={ AllPostsNavigation }
            options={ {
                ...tab('ios-albums')
            } }
        />
        <BottomNavigation.Screen
            name={ 'Liked posts' }
            component={ LikedPostsNavigation }
            options={ {
                ...tab('ios-heart')
            } }

        />
    </BottomNavigation.Navigator>
);