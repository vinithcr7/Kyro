import './App.css';
import SideNav from './Components/Common/SideNav';
import { sideNavSchema } from './Schema/SideNavSchema'

function App() {
  return (
    <SideNav sideNavSchema={sideNavSchema} />
  );
}

export default App;
