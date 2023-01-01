import './App.css';
import './Styles/Root.css'
import SideNav from './Components/Common/SideNav';
import { sideNavSchema } from './Schema/SideNavSchema';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MyProfile from './Components/MyProfile/MyProfile';
import ProfileContextProvider from './Contexts/ProfileContext';
import Projects from './Components/Projects/Projects';

const Root = () => {

    return (
        <ProfileContextProvider>
            <div>
                <Router>
                    <SideNav sideNavSchema={sideNavSchema}>
                        <Header />
                        <div className="content-area">
                            <Routes>
                                <Route exact path='/' element={<MyProfile />}></Route>
                                <Route exact path='/projects' element={<Projects />}></Route>
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Routes>
                        </div>
                    </SideNav>
                </Router>
            </div>
        </ProfileContextProvider>
    )
}

export default Root;