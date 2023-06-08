export default function appReducer(state, action) {
    switch (action.type) {
        case 'added': {
        return [...state, {
            id: action.id,
            text: action.text,
            done: false
        }];
        }
        case 'update_recommendation_request': {
            return { ...state, recommendationReq: action.payload }
        }
        case 'update_recommendation': {
            return { ...state, recommendation: action.payload }
        }
        default: {
        throw Error('Unknown action: ' + action.type);
        }
    }
}