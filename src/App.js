import './App.css';
import HomeScreen from './screens/HomeScreen';
import Active from './screens/Active';
import Complete from './screens/Complete';
import { Routes, Route, BrowserRouter, } from 'react-router-dom'
import { Link } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter  >
      <h1 style={{ textAlign: 'center' }}>#Todo</h1>
      <div style={{ fontSize: '100', display: 'flex', justifyContent: 'space-around', margin: 10 }}>
        <Link to='/HomeScreen'>All</Link>
        <Link to='/Active'>Active</Link>
        <Link to='/compele'>Complete</Link>

      </div>
      <Routes>
        <Route path='/HomeScreen' element={<HomeScreen />} />
        <Route path='/Active' element={<Active />} />
        <Route path='/Complete' element={<Complete />} />
      </Routes>

    </BrowserRouter >

  );
}

export default App;
