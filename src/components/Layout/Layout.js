import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

function Layout({ children: child }) {
  return (
    <>
      <Header />
      <Nav />
            
      <main>
        {child}
      </main>

      <Footer />
    </>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node
};

Layout.defaultProps = { 
  children: null, 
};
