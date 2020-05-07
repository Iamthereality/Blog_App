import React, { useEffect, useCallback } from 'react';
import { View, ScrollView, Text, Image, Button, Alert } from 'react-native';

import { useDispatch, useSelector } from "react-redux";
import { CommonActions } from '@react-navigation/native';
import {STYLES, THEME} from "../styles/styles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { removePost, toggleLike } from "../store/actions/postActions";

export const PostScreen = ({ route, navigation }) => {
    const { postID } = route.params;
    const { date } = route.params;
    const { liked } = route.params;
    const post = useSelector((state) => {
        return state.posts.allPosts.find((post) => {
            return post.id === postID;
        });
    });
    const iconName = liked ? 'ios-heart' : 'ios-heart-empty';
    const dispatch = useDispatch();

    const likedPost = useSelector((state) => {
        return state.posts.likedPosts.some((post) => {
            return post.id === postID;
        });
    });

    useEffect(() => {
        navigation.dispatch(CommonActions.setParams({
            liked: likedPost
        }))
    }, [likedPost]);

    const toggleLikeHandler = useCallback(() => {
        dispatch(toggleLike(post));
    }, [dispatch, post]);

    useEffect(() => {
        navigation.setOptions({
            toggleLikeHandler: toggleLikeHandler
        });
    }, [toggleLikeHandler]);


    const deletePost = () => {
        Alert.alert(
            `You're going to delete the post`,
            'Are you sure?',
            [
                {
                    text: 'Cancel',
                    onPress: () => {},
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        if (liked) {
                            toggleLikeHandler();
                        }
                        dispatch(removePost(postID));
                    }
                },
            ],
            { cancelable: false },
        );
    };

    if (!post) {
        navigation.dispatch(CommonActions.goBack());
        return null;
    }

    navigation.setOptions({
        title: `Created ${ new Date(date).toLocaleDateString() } ${ new Date(date).toLocaleTimeString() }`,
        headerRight: () => (
            <HeaderButtons
                HeaderButtonComponent={ AppHeaderIcon }
            >
                <Item
                    title={ 'like' }
                    iconName={ iconName }
                    onPress={ toggleLikeHandler }
                />
            </HeaderButtons>
        )
    });

    return (
        <ScrollView
            contentContainerStyle={ STYLES.postScreen }
        >
            <Image
                source={ { uri: post.img } }
                style={ {
                    ...STYLES.postImg,
                    height: 300
                } }
            />
            <View style={ STYLES.postTextContainer }>
                <Text style={ STYLES.postText }>
                    { post.text }
                </Text>
            </View>
            <View style={ STYLES.postButtonContainer }>
                <Button
                    onPress={ deletePost }
                    title={ 'Delete' }
                    color={ THEME.ALERT_COLOR }
                />
            </View>
        </ScrollView>
    );
};