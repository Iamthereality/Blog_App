import React, { useEffect } from 'react';
import {View, ScrollView, Text, Image, Button, Alert, Platform} from 'react-native';

import { STYLES, THEME } from "../styles/styles";
import { DATA } from "../data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const PostScreen = ({ route, navigation }) => {
    const { postID } = route.params;
    const { date } = route.params;
    const { liked } = route.params;
    const post = DATA.find((post) => post.id === postID);

    const deletePost = () => {
        Alert.alert(
            `You're going to delete the post`,
            'Are you sure?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel'),
                    style: 'cancel',
                },
                {text: 'Delete', style: 'destructive', onPress: () => console.log('Delete')},
            ],
            { cancelable: false },
        );
    };

    const iconName = liked ? 'ios-star' : 'ios-star-outline';

    navigation.setOptions({
        title: `Posted at ${ new Date(date).toLocaleDateString() } ${ new Date(date).toLocaleTimeString() }`,
        headerRight: () => (
            <HeaderButtons
                HeaderButtonComponent={ AppHeaderIcon }
            >
                <Item
                    title={ 'like' }
                    iconName={ iconName }
                    onPress={ () => console.log('like') }
                />
            </HeaderButtons>
        )
    });

    return (
        <ScrollView contentContainerStyle={ STYLES.postScreen }>
            <Image
                source={ { uri: post.img } }
                style={ STYLES.postImg }
            />
            <View style={ STYLES.postTextContainer }>
                <Text style={ STYLES.postText }>
                    { post.text }
                </Text>
            </View>
            <Button
                title={ 'Delete' }
                onPress={ deletePost }
            />
        </ScrollView>
    );
};