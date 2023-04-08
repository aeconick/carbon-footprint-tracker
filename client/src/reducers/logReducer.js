export const logReducer = (state, action) => {
    switch (action.type) {
        case 'LOG_FETCH':
            return {...action.log};
        case 'COMMENT_ADD':
            return {
                ...state, //spread old state
                comments: [...state.comments, { //spread old comments
                    ...action.comment, //add new comment
                    author: { //add author
                        email: action.userEmail,
                    }
                }],
            };
        default:
            return state;
    }
};