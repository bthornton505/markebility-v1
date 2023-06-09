export default function appReducer(state, action) {
    const { payload } = action;
    switch (action.type) {
        case 'added': {
        return [...state, {
            id: action.id,
            text: action.text,
            done: false
        }];
        }
        case 'update_user': {
            return { ...state, name: payload.name, email: payload.email }
        }
        case 'update_recommendation_request': {
            return { ...state, recommendationReq: payload }
        }
        case 'update_recommendation': {
            return { ...state, recommendation: payload }
        }
        default: {
        throw Error('Unknown action: ' + action.type);
        }
    }
}