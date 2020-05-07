import React from 'react';

import { Ionicons } from "@expo/vector-icons";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { BottomTabNavigation } from "./BottomTabNavigation";
import { AboutAppNavigation } from "./AboutAppNavigation";
import { CreatePostNavigation } from "./CreatePostNavigation";

import { THEME } from "../styles/styles";

const SideNavigation = createDrawerNavigator();
export const SideMenuNavigation = () => (
    <SideNavigation.Navigator
        initialRouteName={ 'BottomTabNavigation' }
        drawerContentOptions={ {
            activeTintColor: THEME.MAIN_COLOR,
            labelStyle: {
                fontFamily: 'open-regular',
                fontSize: 16
            }
        } }
    >
        <SideNavigation.Screen
            name={ 'All posts' }
            component={ BottomTabNavigation }
            options={ {
                drawerIcon: (info) => {
                    return (
                        <Ionicons
                            name={ 'ios-albums' }
                            size={ 24 }
                            color={ info.color }
                        />
                    );
                }
            } }
        />
        <SideNavigation.Screen
            name={ 'Create post' }
            component={ CreatePostNavigation }
            options={ {
                drawerIcon: (info) => {
                    return (
                        <Ionicons
                            name={ 'ios-add-circle' }
                            size={ 24 }
                            color={ info.color }
                        />
                    );
                }
            } }
        />
        <SideNavigation.Screen
            name={ 'About app' }
            component={ AboutAppNavigation }
            options={ {
                drawerIcon: (info) => {
                    return (
                        <Ionicons
                            name={ 'ios-information-circle' }
                            size={ 24 }
                            color={ info.color }
                        />
                    );
                }
            } }
        />
    </SideNavigation.Navigator>
);