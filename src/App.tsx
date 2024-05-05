import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <div className='bg-base-800 h-screen'>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path='/login' />
          <Route element={<Register />} path='/register' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
