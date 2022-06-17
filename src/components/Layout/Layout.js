import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

function Layout({ children }) {
  const child = children;
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
  children: PropTypes.element
};

Layout.defaultProps = { 
  children: <Header />, 
};
