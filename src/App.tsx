import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Upsell from './pages/Upssel';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upssel" element={<Upsell />} />
    </Routes>
  );
}

export default App;