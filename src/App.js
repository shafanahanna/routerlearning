import logo from './logo.svg';
import './App.css';
import MainRouter from './Router/MainRouter';
import { createContext } from 'react';
import  Container  from './Blog/Container';

export const mycontext=createContext()

function App() {
  return (
    <div className="App">
     <mycontext.Provider value='Thankyou'>
       <MainRouter />
     </mycontext.Provider>

     <Container/>
   
    </div>
  );
}

export default App;
