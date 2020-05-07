import { StyleSheet } from 'react-native';

export const STYLES = StyleSheet.create({
    mainScreen: {
        paddingTop: 15,
        paddingHorizontal: 5
    },
    postScreen: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 15
    },
    post: {
        marginBottom: 15,
        overflow: 'hidden',
        borderRadius: 5
    },
    postButtonContainer: {
        width: '100%',
        paddingHorizontal: 5
    },
    postImg: {
        width: '100%',
        height: 200
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
    centeredScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centeredText: {
        paddingVertical: 20,
        fontFamily: 'open-regular',
        fontSize: 18
    },
    createPostContainer: {
        flexGrow: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 5
    },
    createPostTitle: {
        width: '100%',
        fontFamily: 'open-bold',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10
    },
    savePostButtonContainer: {
        marginTop: 15,
        width: '100%',
    },
    createPostDescription: {
        marginVertical: 15,
        marginHorizontal: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#303F9F'
    },
    aboutScreenText: {
        textAlign: 'center',
        fontFamily: 'open-regular',
        fontSize: 18
    },
    aboutVersion: {
        fontFamily: 'open-bold'
    }
});

export const THEME = {
    MAIN_COLOR: '#303F9F',
    ALERT_COLOR: '#D81B60'
};