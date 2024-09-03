import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import QuemSomos from './Components/QuemSomos.jsx';
import Produtos from './Components/Produtos.jsx';
import Contato from './Components/Contato.jsx';
import './styles.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <QuemSomos />
      <Produtos />
      <Contato />
    </div>
  );
}