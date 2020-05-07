import React from 'react';

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "./AppHeaderIcon";

export const sideMenuButton = (navigation) => ({
    headerLeft: () => (
        <HeaderButtons
            HeaderButtonComponent={ AppHeaderIcon }
        >
            <Item
                title={ 'Toggle menu' }
                iconName={ 'ios-menu' }
                onPress={ () => navigation.toggleDrawer() }
            />
        </HeaderButtons>
    )
});