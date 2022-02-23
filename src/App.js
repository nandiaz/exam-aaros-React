import './App.css';
import { AppWrap } from './appStyles';
import { CardContent } from './Components/CardContent/CardContent';

import { Header } from './Components/NavBar/Header';


function App() {
  return (
    <AppWrap>
      <Header/>
      <CardContent/>
    </AppWrap>
  );
}

export default App;
