import { Grid } from "@mui/material";
import { getComponent } from '../../Utils/ComponentsMapping';
import { MyProfileSchema } from '../../Schema/MyProfileSchema';
import ButtonComp from '../Common/ButtonComp';
import '../../Styles/MyProfile.css';
import { useEffect, useReducer } from "react";
import { mergeArray } from '../../Utils/util'
import { constants } from './Constants';
const myProfileReducer = (state, action) => {
    switch (action.type) {
        case constants.UPDATE_PROFILE_CONFIG:
            return {
                ...state,
                myProfileConfig: action.myProfileConfig
            }
            break;
        default:
            return state
    }
}

const initialState = {
    myProfileConfig: []
}


const MyProfile = () => {

    const [profile, dispatch] = useReducer(myProfileReducer, initialState);


    const onChange = (event) => {
        let updatedProfileConfig = profile.myProfileConfig.map(config => {
            if (config.id === event.target.id) {
                config.value = event.target.value;
            }
            return config;
        })
        dispatch({ type: constants.UPDATE_PROFILE_CONFIG, myProfileConfig: updatedProfileConfig })
    }

    const eventHandler = {
        onChange: onChange
    }

    useEffect(() => {
        const getProfileData = async () => {
            let profileData = [
                {
                    id: "firstName",
                    value: "Vinith"
                },
                {
                    id: "lastName",
                    value: "Karthik"
                },
                {
                    id: "email",
                    value: "vinith@gmail.com"
                },
                {
                    id: "phoneNumber",
                    value: "9876543221"
                },
                {
                    id: "location",
                    value: "Chennai"
                }
            ]
            let schema = [...MyProfileSchema];
            let myProfileConfig = mergeArray(schema, profileData);
            dispatch({ type: constants.UPDATE_PROFILE_CONFIG, myProfileConfig: myProfileConfig })
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
                        <ButtonComp label={"Reset"} className="reset-btn" />
                        <ButtonComp label={"Save"} />
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