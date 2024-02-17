import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import TestList from './features/IeltsTest';
import Homepage from './features/Homepage'
import Error from './components/ErrorPage/Error';
import SharedLayout from './components/SharedLayout';
import SingleTest from './features/IeltsTest/pages/SingleTest';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="test" element={<TestList />} />
          <Route path="test/:id" element={<SingleTest />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
