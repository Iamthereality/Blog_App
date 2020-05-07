import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    Image,
    Button,
    Keyboard,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';

import { useDispatch } from "react-redux";
import { CommonActions } from '@react-navigation/native';

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import { sideMenuButton } from "../components/sideMenuButton";
import { STYLES, THEME } from "../styles/styles";
import { addPost } from "../store/actions/postActions";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";


export const CreateScreen = ({ navigation }) => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const getPermissions = async () => {
        const { status } = await Permissions.askAsync(
            Permissions.CAMERA,
            Permissions.CAMERA_ROLL
        );
        if (status !== 'granted') {
            Alert.alert(`You didn't provide the permission to use phone camera`);
            return false;
        }
        return true;
    };

    const takePhoto = async () => {
        const permission = await getPermissions();

        if (!permission) {
            return;
        }

        const img = await ImagePicker.launchCameraAsync({
            quality: 1,
            allowsEditing: false,
            aspect: [3, 4],
        });

        if (img) {
            setImage(img.uri);
        }
    };

    const savePost = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: image,
            liked: false
        };

        dispatch(addPost(post));
        setText('');
        setImage(null);
        navigation.dispatch(CommonActions.navigate({
            name: 'MainScreen'
        }));
    };

    navigation.setOptions({
        headerTitle: 'New post',
        ...sideMenuButton(navigation),
        headerRight: () => (
            <HeaderButtons
                HeaderButtonComponent={ AppHeaderIcon }
            >
                <Item
                    title={ 'Take a photo' }
                    iconName={ 'ios-camera' }
                    onPress={ takePhoto }
                />
            </HeaderButtons>
        ),
    });

    return (
        <TouchableWithoutFeedback
            onPress={ () => Keyboard.dismiss() }
        >
            <ScrollView contentContainerStyle={ STYLES.createPostContainer }>
                <View
                    style={ {
                        width: '100%'
                    } }
                >
                    <Text style={ STYLES.createPostTitle }>
                        { 'Create new post' }
                    </Text>
                    <TextInput
                        style={ STYLES.createPostDescription }
                        placeholder={ 'Post description' }
                        value={ text }
                        onChangeText={ setText }
                        multiline
                    />
                    { !image && !text ? (
                            <View style={ STYLES.centeredScreen }>
                                <Text style={ STYLES.centeredText }>
                                    { `Make a photo and add its description` }
                                </Text>
                            </View>
                        ) : !text && image ? (
                            <>
                                <View style={ STYLES.centeredScreen }>
                                    <Text style={ STYLES.centeredText }>
                                        { `Add photos description` }
                                    </Text>
                                </View>
                                <Image
                                    style={ {
                                        ...STYLES.postImg,
                                        height: 300,
                                        marginVertical: 15
                                    } }
                                    source={ { uri: image } }
                                />
                            </>
                        ) : text && !image ? <>
                            <View style={ STYLES.centeredScreen }>
                                <Text style={ STYLES.centeredText }>
                                    { `Make a photo` }
                                </Text>
                            </View>
                        </> : (
                            <Image
                                style={ {
                                    ...STYLES.postImg,
                                    height: 300,
                                    marginVertical: 15
                                } }
                                source={ { uri: image } }
                            />
                        )
                    }
                </View>

                <View style={ STYLES.savePostButtonContainer }>
                    <Button
                        onPress={ savePost }
                        title={ 'save' }
                        color={ THEME.MAIN_COLOR }
                        disabled={ !text || !image }
                    />
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
        // <AppCamera/>
    );
};