import './Portfolio.css';

export default function Portfolio() {
    return (
      <div className="portfolio-container">
        <div className="image-grid">
          <img src="https://via.placeholder.com/150" alt="Produto 1" className="small-image" />
          <img src="https://via.placeholder.com/150" alt="Produto 2" className="small-image" />
          <img src="https://via.placeholder.com/150" alt="Produto 3" className="small-image" />
        </div>
        <div className="description">
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, libero quis ultrices eleifend, diam nisi condimentum augue, quis sagittis nunc lectus ac lacus. Aenean ornare auctor volutpat. Sed ut ante est. Pellentesque quis leo vel ante ornare mollis mollis quis lorem. Etiam pharetra congue augue, ut sodales est. Donec massa lectus, ultricies ut pharetra vel, efficitur eget ipsum. Vestibulum dolor arcu, feugiat id nunc sit amet, efficitur tincidunt nisi. Suspendisse potenti. Etiam a massa eget leo placerat sollicitudin at id erat. Nunc tempus, massa quis auctor viverra, urna turpis malesuada ex, vitae mollis erat enim nec massa. Phasellus vel venenatis velit. Vestibulum condimentum lacus ut quam facilisis aliquam. Donec eu sem nec sem porttitor laoreet in eget arcu.
          </p>
        </div>
        <div className="large-image">
          <img src="https://via.placeholder.com/300x450" alt="Produto 4" className="large-image" />
        </div>
      </div>
    );
  }