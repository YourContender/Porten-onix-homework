import React from 'react';
import PropTypes from 'prop-types';
import Request from '../../../request';
import ModalWindowView from './ModalWindowView';

class ModalWindow extends React.Component {
  constructor(props) { // eslint-disable-line
    super(props);

    this.state = {};
  }
  
  data = new Request();

  componentDidMount() {
    document.addEventListener('keydown', this.onClickEscape);
  }

  onClickEscape = (e) => {
    const { showModalWindow } = this.props;

    if (e.code === 'Escape') {
      showModalWindow();
    }
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {
    const {
      addNewProduct, showModalWindow, id, order 
    } = this.props;

    const result = this.state;

    const defaultValue = {
      url: result.url === undefined ? '' : result.url,
      price: result.price === undefined ? '' : result.price,  
      title: result.title === undefined ? '' : result.title,
      description: result.description === undefined ? '' : result.description,
      currency: result.currency === undefined ? '' : result.currency,
      country: result.country === undefined ? '' : result.country,
      id: +id + 1,
      order: +order + 1,
      active: false,
    };

    this.data
      .addNewItem({ ...result, ...defaultValue })
      .then((res) => addNewProduct(res));
        
    showModalWindow();
  };
    
  render() {
    const { showModalWindow } = this.props;

    return (
      <ModalWindowView 
        handleInput={this.handleInput}
        onSubmit={this.onSubmit}
        showModalWindow={showModalWindow}
      />
    );
  }
}

export default ModalWindow;

ModalWindow.propTypes = {
  addNewProduct: PropTypes.func,
  showModalWindow: PropTypes.func,
  id: PropTypes.number,
  order: PropTypes.number
};

ModalWindow.defaultProps = { 
  addNewProduct: () => null,
  showModalWindow: () => null,
  id: 'default id',
  order: 'default order'
};
