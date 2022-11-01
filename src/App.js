import './App.css';
import SideNav from './Components/Common/SideNav';
import { sideNavSchema } from './Schema/SideNavSchema';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MyProfile from './Components/MyProfile/MyProfile';


function App() {
  return (
    <div>
      <SideNav sideNavSchema={sideNavSchema}>
        <Header userName={'vinith'} />
        <Router>
          <Routes>
            <Route exact path='/' element={<MyProfile />}></Route>
          </Routes>
        </Router>
      </SideNav>
    </div>
  );
}

export default App;
