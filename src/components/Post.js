import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import { STYLES } from "../styles/styles";
import Ripple from "react-native-material-ripple";

export const Post = ({ post, onOpen }) => {
    return (
        <Ripple
            rippleColor={ 'rgba(255, 255, 255, 0.5)' }
            onPress={ () => onOpen(post) }
        >
            <View style={ STYLES.post }>
                <ImageBackground
                    style={ STYLES.postImg }
                    source={ { uri: post.img } }
                >
                    <View style={ STYLES.postTitleContainer }>
                        <Text style={ STYLES.postTitle }>
                            { new Date(post.date).toLocaleDateString() }
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </Ripple>
    );
};