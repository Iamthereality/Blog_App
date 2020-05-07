import {
    ADD_POST,
    LOAD_POSTS,
    REMOVE_POST,
    TOGGLE_LIKE
} from "../types";

const initialState = {
    allPosts: [],
    likedPosts: [],
    loading: true
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                allPosts: action.payload,
                likedPosts: action.payload.filter((post) => post.liked),
                loading: false
            };

        case TOGGLE_LIKE:
            const allPosts = state.allPosts.map((post) => {
                if (post.id === action.payload) {
                    post.liked = !post.liked;
                }
                return post;
            });

            return {
                ...state,
                allPosts: allPosts,
                likedPosts: allPosts.filter((post) => post.liked)
            };

        case REMOVE_POST:
            return {
                ...state,
                allPosts: state.allPosts.filter((post) => {
                    return post.id !== action.payload;
                }),
                likedPosts: state.likedPosts.filter((post) => {
                    return post.id !== action.payload;
                })
            };

        case ADD_POST:
            return {
                ...state,
                allPosts: [
                    {
                        ...action.payload
                    },
                    ...state.allPosts
                ]
            };

        default: return state
    }
};