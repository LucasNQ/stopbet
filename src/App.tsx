import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Upsell = lazy(() => import('./pages/Upssel'));

function App() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-brand-black text-white">Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upssel" element={<Upsell />} />
      </Routes>
    </Suspense>
  );
}

export default App;