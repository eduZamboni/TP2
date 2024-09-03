import React from 'react';

export default function Portfolio() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto auto',
        gap: '20px',
        maxWidth: '1200px',
        margin: '20px',
      }}
    >
      <div
        style={{
          gridColumn: '1 / span 2',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <img
          src="https://via.placeholder.com/150"
          alt="Produto 1"
          style={{
            width: '30%',
            height: 'auto',
            border: '1px solid black',
          }}
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Produto 2"
          style={{
            width: '30%',
            height: 'auto',
            border: '1px solid black',
          }}
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Produto 3"
          style={{
            width: '30%',
            height: 'auto',
            border: '1px solid black',
          }}
        />
      </div>
      <div
        style={{
          gridColumn: '1 / span 1',
          gridRow: '2 / span 1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'top',
          margin: '20px',
        }}
      >
        <h2
          style={{
            marginBottom: '10px',
          }}
        >
          Lorem ipsum
        </h2>
        <p
          style={{
            textAlign: 'justify',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, libero quis ultrices eleifend, diam nisi condimentum augue, quis sagittis nunc lectus ac lacus. Aenean ornare auctor volutpat. Sed ut ante est. Pellentesque quis leo vel ante ornare mollis mollis quis lorem. Etiam pharetra congue augue, ut sodales est. Donec massa lectus, ultricies ut pharetra vel, efficitur eget ipsum. Vestibulum dolor arcu, feugiat id nunc sit amet, efficitur tincidunt nisi. Suspendisse potenti. Etiam a massa eget leo placerat sollicitudin at id erat. Nunc tempus, massa quis auctor viverra, urna turpis malesuada ex, vitae mollis erat enim nec massa. Phasellus vel venenatis velit. Vestibulum condimentum lacus ut quam facilisis aliquam. Donec eu sem nec sem porttitor laoreet in eget arcu.
        </p>
      </div>
      <div
        style={{
          gridColumn: '2 / span 1',
          gridRow: '2 / span 1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="https://via.placeholder.com/300x450"
          alt="Produto 4"
          style={{
            width: '100%',
            height: 'auto',
            border: '1px solid black',
          }}
        />
      </div>
    </div>
  );
}