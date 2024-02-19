import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import TestList from './features/IeltsTest';
import Homepage from './features/Homepage'
import Error from './components/ErrorPage/Error';
import SharedLayout from './components/SharedLayout';
import SingleTest from './features/IeltsTest/pages/SingleTest';
import Login from './features/Login';
import Dashboard from './features/Dashboard';

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="test" element={<TestList />} />
          <Route path="test/:id" element={<SingleTest />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="dashboard" element={<Dashboard user={user} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
