import React from 'react';
import { View, Text } from 'react-native';

import { Styles } from "../styles/styles";

export const AboutScreen = ({ navigation }) => {
    return (
        <View style={ Styles.centered }>
            <Text>
                { 'AboutScreen' }
            </Text>
        </View>
    );
};