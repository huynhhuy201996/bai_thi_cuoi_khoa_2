import './App.css';
import HomeScreen from './screens/HomeScreen';
import Active from './screens/Active';
import Complete from './screens/Complete';
import { Routes, Route, BrowserRouter, } from 'react-router-dom'
import { Link } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter  >
      <div>
        <h1 style={{ textAlign: 'center' }}>To do List</h1>
        <div style={{ fontSize: '100', display: 'flex', justifyContent: 'space-around', margin: 25 }}>
          <Link to='/'>All</Link>
          <Link to='/Active'>Active</Link>
          <Link to='/complete'>Complete</Link>
        </div>

      </div>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/Active' element={<Active />} />
        <Route path='/Complete' element={<Complete />} />
      </Routes>

    </BrowserRouter >

  );
}

export default App;
