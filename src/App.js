import './App.css';
import SideNav from './Components/Common/SideNav';
import { sideNavSchema } from './Schema/SideNavSchema';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyProfile from './Components/MyProfile/MyProfile';
import ProfileContextProvider from './Contexts/ProfileContext';


function App() {
  return (
    <ProfileContextProvider>
      <div>
        <SideNav sideNavSchema={sideNavSchema}>
          <Header />
          <Router>
            <Routes>
              <Route exact path='/' element={<MyProfile />}></Route>
            </Routes>
          </Router>
        </SideNav>
      </div>
    </ProfileContextProvider>
  );
}

export default App;
