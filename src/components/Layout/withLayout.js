import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

function withLayout(Component) {
  return function Layout() {
    return (
      <>
        <Header />
        <Nav />

        <main>
          <Component />
        </main>

        <Footer />
      </>
    );
  };
}
  
export default withLayout;
