import logo from './logo.svg';
import './App.css';
import { MainRoute } from './component/mainRoute';
import { Navbar } from './component/navbar';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <MainRoute/>
    </div>
  );
}

export default App;
