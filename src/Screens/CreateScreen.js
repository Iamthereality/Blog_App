import React from 'react';
import { View, Text } from 'react-native';

import { Styles } from "../styles/styles";

export const CreateScreen = ({ navigation }) => {
    return (
        <View style={ Styles.centered }>
            <Text>
                { 'CreateScreen' }
            </Text>
        </View>
    );
};