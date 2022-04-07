// import logo from './logo.svg';
// import './App.css';
import './day1r/listkey.css';
// import List1 from './day1r/list';
import Listkey from './day1r/listkey';
import Join from './day1r/Joinus';
import Login from './day1r/Login';
import Settings from './day1r/Settings';
import Download from './day1r/Download';
import Contact from './day1r/Contact';
import Search from './day1r/Search';
import Help from './day1r/Help';
import Home from './day1r/Home';
import Allbtnprops from './day1r/Allbtnprops';


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

<h1> Problem II</h1>
<div className="P3">
  <div className='o'>
    <Allbtnprops id="Join" name="Join US"/>
  <Allbtnprops id="Setting" name="Setting US"/>
  </div>

  <div className='o'>
    <Allbtnprops id="Login" name="Login US"/>
  <Allbtnprops id="Contact" name="Contact US"/>
  </div>

 <div className='o'> 
   <Allbtnprops id="Search" name="Search US"/>
  <Allbtnprops id="Help" name="Help US"/>
  </div>

 <div className='o'>
    <Allbtnprops id="Home" name="Home US"/>
  <Allbtnprops id="Download" name="Download US"/>
  </div>
</div>



    </div>



  );
}

export default App;
