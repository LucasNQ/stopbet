import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Upsell from './pages/Obrigado';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/obrigado" element={<Upsell />} />
    </Routes>
  );
}

export default App;