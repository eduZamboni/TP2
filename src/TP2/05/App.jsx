import Card from './Components/Card.jsx';

export default function App() {
    return (
      <div className="app-container">
        <h2>Cards</h2>
        <Card 
          titulo="Card 1"
          texto="1 Quisque sagittis est neque, eu dignissim dui gravida et. Mauris id nisl sed purus semper elementum eu a turpis. Curabitur et sollicitudin risus, in lacinia risus. Aliquam finibus purus felis, quis cursus justo hendrerit interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sit amet pulvinar nibh, nec molestie odio."
        />
        <Card 
          titulo="Card 2"
          texto="2 Quisque sagittis est neque, eu dignissim dui gravida et. Mauris id nisl sed purus semper elementum eu a turpis. Curabitur et sollicitudin risus, in lacinia risus. Aliquam finibus purus felis, quis cursus justo hendrerit interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sit amet pulvinar nibh, nec molestie odio."
        />
        <Card 
          titulo="Card 3"
          texto="3 Quisque sagittis est neque, eu dignissim dui gravida et. Mauris id nisl sed purus semper elementum eu a turpis. Curabitur et sollicitudin risus, in lacinia risus. Aliquam finibus purus felis, quis cursus justo hendrerit interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sit amet pulvinar nibh, nec molestie odio."
        />
        <Card 
          titulo="Card 4"
          texto="4 Quisque sagittis est neque, eu dignissim dui gravida et. Mauris id nisl sed purus semper elementum eu a turpis. Curabitur et sollicitudin risus, in lacinia risus. Aliquam finibus purus felis, quis cursus justo hendrerit interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sit amet pulvinar nibh, nec molestie odio."
        />
      </div>
    );
  }