import React from 'react';
import { Text, View } from "react-native";

import { useSelector } from "react-redux";

import { sideMenuButton } from "../components/sideMenuButton";
import { PostsList } from "../components/PostsList";
import { STYLES } from "../styles/styles";

export const LikedScreen = ({ navigation }) => {

    const likedPosts = useSelector((state) => state.posts.likedPosts);
    const allPosts = useSelector((state) => state.posts.allPosts);


    navigation.setOptions({
        title: 'Liked posts',
        ...sideMenuButton(navigation)
    });

    return (
        likedPosts.length > 0 ? (
            <PostsList
                data={ likedPosts }
                navigation={ navigation }
            />
        ) : allPosts.length > 0 ? (
            <View style={ STYLES.centeredScreen }>
                <Text style={ STYLES.centeredText }>
                    { `You didn't liked anything yet :(` }
                </Text>
            </View>
        ) : (
            <View style={ STYLES.centeredScreen }>
                <Text style={ STYLES.centeredText }>
                    { `There is still no posts you could like` }
                </Text>
            </View>
        )
    );
};