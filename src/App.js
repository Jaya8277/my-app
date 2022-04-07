import logo from './logo.svg';
// import './App.css';
import './day1r/listkey.css';
import List1 from './day1r/list';
import Listkey from './day1r/listkey';
import Join from './day1r/Joinus';
import Login from './day1r/Login';
import Settings from './day1r/Settings';
import Download from './day1r/Download';
import Contact from './day1r/Contact';
import Search from './day1r/Search';
import Help from './day1r/Help';
import Home from './day1r/Home';


function App() {
  return (
    <div className="App">
      
      <div className='div1'>
      <Listkey/>
      </div>
      <div className='div1'>
        <Join/>
        <Settings/>
        </div>
      <div className='div1'>
        <Login/>
        <Contact/>
      </div>
      <div className='div1'>
        <Search/>
        <Help/>
      </div>
      <div className='div1'>
        <Home/>
        <Download/>
      </div>


   
    </div>
  );
}

export default App;
