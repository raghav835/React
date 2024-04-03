import Navbar from './components/Navbar';
import HomePage from './pages/homepage/HomePage';
import './layout.scss';

function App() {
  return (
    <div className="layout">
      <div className="navbar"><Navbar/></div>
      <div className="content"><HomePage/></div>
    </div>
  );
}

export default App;
