import React from 'react';
import PropTypes from 'prop-types';
import { request } from '../../../request';
import ModalWindowView from './ModalWindowView';

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      price: 0,
      description: '',
      url: '',
      currency: '',
      country: '',
      id: +this.props.id + 1,
      order: +this.props.order + 1,
      active: false
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onClickEscape);
  }

  onClickEscape = (e) => {
    if (e.code === 'Escape') {
      this.props.showModalWindow();
    }
  };

  data = new request();

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {
    const result = this.state;
    const { addNewProduct, showModalWindow } = this.props;

    this.data
      .addNewItem(result)
      .then((res) => addNewProduct(res));
        
    showModalWindow();
  };
    
  render() {
    return (
      <ModalWindowView 
        handleInput={this.handleInput}
        onSubmit={this.onSubmit}
        showModalWindow={this.props.showModalWindow}
      />
    );
  }
}

export default ModalWindow;

ModalWindow.propTypes = {
  addNewProduct: PropTypes.func,
  showModalWindow: PropTypes.func
};
