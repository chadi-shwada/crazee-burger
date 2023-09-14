import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/pages/login/LoginPage';
import OrderPage from './components/pages/order/OrderPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:prenom" element={<OrderPage />} />
        <Route path="*" element={
        <div>
          <h1>ErrorPage</h1>
          <button onClick={() => window.location.href = '/'}>Retourner à la page de connexion</button>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
