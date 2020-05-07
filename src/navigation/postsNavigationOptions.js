import { TransitionPresets } from "@react-navigation/stack";
import { Platform } from "react-native";
import { THEME } from "../styles/styles";

export const postsNavigationOptions = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    ...TransitionPresets.SlideFromRightIOS,
    headerStyle: {
        // backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#FFFFFF'
        backgroundColor: '#FFFFFF'
    },
    // headerTintColor: Platform.OS === 'android' ? '#FFFFFF' : THEME.MAIN_COLOR,
    headerTintColor: THEME.MAIN_COLOR,
    headerTitleAlign: 'center'
};