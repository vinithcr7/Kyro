import { Grid } from "@mui/material";
import { getComponent } from '../../Utils/ComponentsMapping';
import { MyProfileSchema } from '../../Schema/MyProfileSchema';
import ButtonComp from '../Common/ButtonComp';
import '../../Styles/MyProfile.css';
import { useEffect, useContext } from "react";
import { mergeArray, checkStatus, pareJSON, req } from '../../Utils/util'
import { constants } from './Constants';
import { profileContext } from '../../Contexts/ProfileContext';

const MyProfile = () => {
    const { profile, dispatchProfile } = useContext(profileContext);

    const onChange = (event) => {
        let updatedProfileConfig = profile.myProfileConfig.map(config => {
            if (config.id === event.target.id) {
                return {
                    ...config,
                    value: event.target.value
                }
            }
            return config;
        })
        dispatchProfile({ type: constants.UPDATE_PROFILE_CONFIG, myProfileConfig: updatedProfileConfig });
    }

    const eventHandler = {
        onChange: onChange
    }

    const resetProfile = () => {
        dispatchProfile({ type: constants.UPDATE_PROFILE_CONFIG, myProfileConfig: profile.tempConfig })
    }

    const saveChanges = async () => {
        let payload = {}, changedDataArr = [];
        profile.myProfileConfig.forEach((attr) => {
            let existingAttr = profile.tempConfig.find(tempAttr => tempAttr.id === attr.id);
            if (existingAttr && existingAttr.value !== attr.value) {
                changedDataArr.push({ id: attr.id, value: attr.value })
            }
        })
        payload.data = changedDataArr;
        updateProfile(payload);
    }

    const updateProfile = async (payload) => {
        try {
            let response = await req({
                url: `http://localhost:3001/userinfo/${profile.userId}`,
                method: 'PUT',
                payload: payload
            });
            response = checkStatus(response);
            response = await pareJSON(response);
            if(response.status === 'success') {
                dispatchProfile({ type: constants.UPDATE_TEMP_CONFIG, tempConfig: profile.myProfileConfig });
                let firstNameObj = payload.data.find(data => data.id === 'firstName');
                if (firstNameObj) {
                    dispatchProfile({ type: constants.DISPLAY_NAME, displayName: firstNameObj.value })
                }
            } else {
                throw new Error();
            }
        } catch (err) {

        }
    }

    useEffect(() => {
        const getProfileData = async () => {
            try {
                let response = await req({
                    url: 'http://localhost:3001/userinfo',
                    method: 'GET'
                });
                let profileData = response[0].data;
                let displayName = profileData.find(data => data.id === 'firstName');
                let schema = [...MyProfileSchema];
                let myProfileConfig = mergeArray(schema, profileData);
                dispatchProfile({ type: constants.UPDATE_PROFILE_CONFIG, myProfileConfig: myProfileConfig })
                dispatchProfile({ type: constants.UPDATE_TEMP_CONFIG, tempConfig: myProfileConfig })
                dispatchProfile({ type: constants.DISPLAY_NAME, displayName: displayName.value })
                dispatchProfile({ type: constants.USER_ID, userId: response[0]._id })
            } catch (err) {

            }
        }
        getProfileData()
    }, [])
    return (
        <div className="profile-container">
            <div className="profile-detailview-container">
                My Profile
                <div className="profile-detailview">
                    <Grid container spacing={2}>
                        {
                            profile.myProfileConfig.map((attribute) => {
                                return (
                                    <Grid key={attribute.id} item xs={6} md={6}>
                                        {getComponent(attribute, eventHandler)}
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <div className="profile-footer">
                        <ButtonComp label={"Reset"} className="reset-btn" onClick={resetProfile} />
                        <ButtonComp label={"Save"} onClick={saveChanges} />
                    </div>
                </div>
            </div>
            <div className="profile-display-container">
                <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {
                        profile.myProfileConfig.map((attribute) => {
                            return (
                                <Grid key={attribute.id} item xs={12} md={12}>
                                    <span>{attribute.value}</span>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </div>
    )
}

export default MyProfile;