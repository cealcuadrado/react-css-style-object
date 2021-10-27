import './Layout.css';

function Layout() {
    const foo = {
        border: '1px solid black',
        boxShadow: '5px 5px 5px black',
        borderRadius: '15px',
        padding: '1rem'
    };

    const title = {
        color: 'red',
        textTransform: 'uppercase'
    };

    const paragraph = {
        color: 'brown',
        marginBottom: '1rem'
    };
    

  return (
    <div className="layout">
      <div style={foo}>
        <h3 style={title}>Lorem Ipsum</h3>
        <p style={paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam odio
          nibh, viverra ac est vel, luctus accumsan diam. Aliquam erat volutpat.
          Integer congue, risus auctor consectetur pretium, nulla diam dictum
          libero, non sollicitudin ante urna vel magna. Duis quis justo
          elementum, luctus orci nec, facilisis diam. Vivamus eros nunc, sodales
          et pellentesque eu, viverra vitae felis. Sed ultricies quis nulla a
          pretium. Maecenas porta dignissim fringilla. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Proin ac mattis turpis. Vivamus
          diam ex, tincidunt vel sapien a, finibus vestibulum elit. Donec eget
          magna congue, pellentesque eros vitae, fermentum mi. Sed ultrices
          turpis vehicula nisi mollis, quis imperdiet lectus rutrum.
        </p>
        <p style={paragraph}>
          Etiam fermentum lacus vel leo pharetra, quis facilisis dolor sagittis.
          Donec ac mi tristique, lacinia quam vel, mollis libero. Donec in
          efficitur tellus. Nulla eu metus eget dolor posuere venenatis. In non
          rutrum nisl. Praesent venenatis risus ac facilisis venenatis.
          Pellentesque vulputate lobortis ante, dignissim varius diam finibus
          tincidunt. Quisque lacinia condimentum leo, vulputate tempus metus
          vehicula id. Quisque blandit magna nec ligula cursus sollicitudin.
          Nullam bibendum augue eget pulvinar interdum. Nunc in justo auctor,
          imperdiet elit et, elementum nibh. Duis laoreet, ante at tristique
          auctor, tellus libero fringilla turpis, et accumsan nulla arcu at
          odio. Mauris dictum nisi ipsum, ut accumsan velit consectetur at.
          Donec ullamcorper eleifend nisi, ac viverra leo porttitor et. Duis
          mattis in elit tempor mollis.
        </p>
      </div>
    </div>
  );
}

export default Layout;
