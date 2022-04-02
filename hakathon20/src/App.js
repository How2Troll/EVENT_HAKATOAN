
import './App.css';
import Header from './dev/header';
import Login from './dev/login.js';
import Info from './dev/info.js'

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <header>
          <Header/>
        </header>
        <body>
          Body of our main page
        </body>
      </div>
    </div>
  );
}

export default App;
