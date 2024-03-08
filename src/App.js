import About from './component/About';
import Home from './component/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteState from './context/notes/NoteState';

function App() {

  return (
    <NoteState>
    <Router>
    <>
    <Routes>
      <Route path='/' element={<Home/>}>    
      </Route>
      <Route path='/about' element={<About/>}>
      </Route>
      </Routes>
    </>
    </Router>
    </NoteState>
  );
}

export default App;
