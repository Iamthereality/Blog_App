import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { postsNavigationOptions } from "./postsNavigationOptions";

import { CreateScreen } from "../Screens/CreateScreen";

const CreateNavigation = createStackNavigator();
export const CreatePostNavigation = () => (
    <CreateNavigation.Navigator
        screenOptions={ postsNavigationOptions }
    >
        <CreateNavigation.Screen
            name={ 'CreateScreen' }
            component={ CreateScreen }
        />
    </CreateNavigation.Navigator>
);
