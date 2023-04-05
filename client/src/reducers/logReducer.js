export const logReducer = (state, action) => {
    switch (action.type) {
        case 'LOG_FETCH':
            return {...action.log};
        case 'COMMENT_ADD':
            return {
                ...state,
                comments: [...state.comments, {
                    ...action.comment,
                    author: {
                        email: action.userEmail,
                    }
                }],
            };
        default:
            return state;
    }
};