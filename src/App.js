import './App.css';
import SideNav from './Components/Common/SideNav';
import { sideNavSchema } from './Schema/SideNavSchema';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <SideNav sideNavSchema={sideNavSchema}>
        <Header userName={'vinith'} />
      </SideNav>
    </div>
  );
}

export default App;
