import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { HeaderButton } from "react-navigation-header-buttons";
import { THEME } from "../styles/styles";

export const AppHeaderIcon = props => (
    <HeaderButton
        { ...props }
        IconComponent={ Ionicons }
        iconSize={ 30 }
        color={ THEME.MAIN_COLOR }
    />
);