import React from 'react';
import { Platform } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { HeaderButton } from "react-navigation-header-buttons";
import { THEME } from "../styles/styles";

export const AppHeaderIcon = props => (
    <HeaderButton
        { ...props }
        IconComponent={ Ionicons }
        iconSize={ 24 }
        color={ Platform.OS === 'android' ? '#FFFFFF' : THEME.MAIN_COLOR }
    />
);