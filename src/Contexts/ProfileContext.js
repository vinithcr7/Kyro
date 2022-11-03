import { createContext, useReducer } from 'react';
import { profileReducer } from '../Reducers/ProfileReducer';

const initialState = {
    myProfileConfig: [],
    tempConfig: [],
    userId: "",
    displayName: ""
}

export const profileContext = createContext();

const ProfileContextProvider = (props) => {
    const [profile, dispatchProfile] = useReducer(profileReducer, initialState);
    return <profileContext.Provider value={{ profile, dispatchProfile }}>{props.children}</profileContext.Provider>
}

export default ProfileContextProvider