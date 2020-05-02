import React from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { STYLES } from "../styles/styles";
import { DATA } from "../data";
import { Post } from "../components/Post";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const MainScreen = ({ navigation }) => {

    navigation.setOptions({
        title: 'My posts',
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
            data={ DATA }
            keyExtracor={ (post) => post.id.toString() }
            renderItem={ ({ item }) => <Post post={ item } onOpen={ goToPost }/> }
        />
    );
};