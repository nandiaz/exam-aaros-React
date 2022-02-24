import './App.css';
import { AppWrap } from './appStyles';
import { CardContent } from './Components/CardContent/CardContent';

import { Header } from './Components/NavBar/Header';
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header/>
      <CardContent/>
      </Router>
  );
}

export default App;
