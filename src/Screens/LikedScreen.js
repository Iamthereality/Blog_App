import React from 'react';
import {View, Text, FlatList, Platform} from 'react-native';

import {STYLES, THEME} from "../styles/styles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { DATA } from "../data";
import { Post } from "../components/Post";

export const LikedScreen = ({ navigation }) => {
    navigation.setOptions({
        title: 'Liked posts',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.ALERT_COLOR : '#FFFFFF'
        },
        headerRight: () => (
            <HeaderButtons
                HeaderButtonComponent={ AppHeaderIcon }
            >
                <Item
                    title={ 'Take a photo' }
                    iconName={ 'ios-camera' }
                    onPress={ () => console.log('camera') }
                />
            </HeaderButtons>
        ),
        headerLeft: () => (
            <HeaderButtons
                HeaderButtonComponent={ AppHeaderIcon }
            >
                <Item
                    title={ 'Toggle menu' }
                    iconName={ 'ios-menu' }
                    onPress={ () => console.log('menu') }
                />
            </HeaderButtons>
        )
    });

    const goToPost = (post) => {
        console.log(post);
        navigation.navigate('PostScreen', {
            postID: post.id,
            date: post.date,
            liked: post.liked
        });
    };

    return (
        <FlatList
            contentContainerStyle={ STYLES.mainScreen }
            data={ DATA.filter((post) => post.liked === true ) }
            keyExtracor={ (post) => post.id.toString() }
            renderItem={ ({ item }) => <Post post={ item } onOpen={ goToPost }/> }
        />
    );
};