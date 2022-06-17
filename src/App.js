
import  {BrowserRouter, Routes} from 'react-router-dom'
import Header from './components/header/Header';
import Routers from './config/Routers'
import './App.css'




function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Header></Header>


    

    
      <Routers></Routers>

    
    </BrowserRouter>
      
    
    </div>
    
  );
}

export default App;
