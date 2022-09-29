import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Update from './pages/Update';
import Add from './pages/Add';
import './style.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Books />} />
          <Route path='/add' element={<Add />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
