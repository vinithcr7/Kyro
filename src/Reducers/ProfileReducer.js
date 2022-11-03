import { constants } from '../Components/MyProfile/Constants';

export const profileReducer = (state, action) => {
    switch (action.type) {
        case constants.UPDATE_PROFILE_CONFIG:
            return {
                ...state,
                myProfileConfig: action.myProfileConfig
            }
        case constants.UPDATE_TEMP_CONFIG:
            return {
                ...state,
                tempConfig: action.tempConfig
            }
        case constants.USER_ID:
            return {
                ...state,
                userId: action.userId
            }
        case constants.DISPLAY_NAME:
            return {
                ...state,
                displayName: action.displayName
            }
        default:
            return state
    }
}