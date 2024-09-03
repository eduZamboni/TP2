import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Card from './Components/Card.jsx';
import './App.css';



export default function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="card-container">
                <Card titulo="Titulo 1" texto="Texto 1" />
                <Card titulo="Titulo 2" texto="Texto 2" />
                <Card titulo="Titulo 3" texto="Texto 3" />
            </div>
            <Footer />
        </div>
    )
}