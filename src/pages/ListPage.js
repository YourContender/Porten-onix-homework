import PropTypes from 'prop-types';
import Button from '../components/Button/Button';
import Layout from '../components/Layout/Layout';
import ListProd from '../components/List/ListProd';

function ListPage({ bg, setBg }) {
  return (
    <Layout>
      <Button bg={bg} setBg={setBg}/>
      <ListProd />
    </Layout>
  );
}

export default ListPage;

ListPage.propTypes = {
  bg: PropTypes.bool,
  setBg: () => null
};

ListPage.defaultProps = { 
  bg: 'dark',
  setBg: () => null
};