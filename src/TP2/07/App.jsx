import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Card from './Components/Card.jsx';
import './App.css';



export default function App() {
    return (
      <div className="app-container">
        <Header />
        <div className="main-content">
          <div className="card-container">
            <Card 
              titulo="Lorem ipsum"
              texto="Quisque sagittis est neque, eu dignissim dui gravida et. Mauris id nisl sed purus semper elementum eu a turpis. Curabitur et sollicitudin risus, in lacinia risus. Aliquam finibus purus felis, quis cursus justo hendrerit interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sit amet pulvinar nibh, nec molestie odio."
            />
            <Card 
              titulo="Lorem ipsum"
              texto="Quisque sagittis est neque, eu dignissim dui gravida et. Mauris id nisl sed purus semper elementum eu a turpis. Curabitur et sollicitudin risus, in lacinia risus. Aliquam finibus purus felis, quis cursus justo hendrerit interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sit amet pulvinar nibh, nec molestie odio."
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }