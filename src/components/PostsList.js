import React from 'react';
import { FlatList } from "react-native";

import { STYLES } from "../styles/styles";
import { Post } from "./Post";

export const PostsList = ({ data, navigation }) => {

    const goToPost = (post) => {
        navigation.navigate('PostScreen', {
            postID: post.id,
            date: post.date,
            liked: post.liked
        });
    };

    const renderedData = (data) => {
        return data.map((post, index) => {
            return {
                ...post,
                key: (Date.now() + index).toString()
            };
        });
    };

    return (
        <FlatList
            contentContainerStyle={ STYLES.mainScreen }
            data={ renderedData(data) }
            keyExtracor={ (post) => post.key }
            renderItem={ ({ item }) => <Post post={ item } onOpen={ goToPost }/> }
        />
    );
};