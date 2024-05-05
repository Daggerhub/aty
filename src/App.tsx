import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';

function App() {
  return (
    <div className='bg-base-800 h-screen'>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path='/login' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
