import React from 'react';
import { View, Text } from 'react-native';
import { sideMenuButton } from "../components/sideMenuButton";
import { STYLES } from "../styles/styles";

export const AboutScreen = ({ navigation }) => {

    navigation.setOptions({
        headerTitle: 'About application',
       ...sideMenuButton(navigation)
    });

    return (
        <View style={ STYLES.centeredScreen }>
            <Text style={ STYLES.aboutScreenText }>
                { 'This is the best app for personal blog!' }
            </Text>
            <Text style={ STYLES.aboutScreenText }>
                { 'Application version ' }
                <Text style={ STYLES.aboutVersion }>
                    { '1.0.0' }
                </Text>
            </Text>
        </View>
    );
};