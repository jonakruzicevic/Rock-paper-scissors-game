import { Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './pages/Home'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
