import { StyleSheet } from 'react-native';

export const STYLES = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainScreen: {
        // paddingTop: 15,
        // paddingHorizontal: 5
    },
    postScreen: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 15
    },
    post: {
        // marginBottom: 15,
        overflow: 'hidden',
        // borderRadius: 5
    },
    postImg: {
        width: '100%',
        height: 250
    },
    postTitleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    postTitle: {
        color: '#FFFFFF',
        fontFamily: 'open-bold',
        fontSize: 20
    },
    postTextContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    postText: {
        textAlign: 'center',
        width: '100%',
        fontFamily: 'open-regular',
        fontSize: 22
    },
});

export const THEME = {
    MAIN_COLOR: '#303F9F',
    ALERT_COLOR: '#D81B60'
};