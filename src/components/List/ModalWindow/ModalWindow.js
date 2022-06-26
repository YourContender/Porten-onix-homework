import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Request from '../../../request';
import ModalWindowView from './ModalWindowView';

function ModalWindow({
  showModalWindow, initOrder, initId, addNewProduct 
}) {
  const [id] = useState(+initId + 1);
  const [order] = useState(+initOrder + 1);
  const [active] = useState(false);
  const [url, setUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState('');
  const [country, setCountry] = useState({});
  const [currency, setCurrency] = useState('');
  const [description, setDescription] = useState('');

  const data = new Request();

  useEffect(() => {
    document.addEventListener('keydown', onClickEscape); // eslint-disable-line
  });

  const onClickEscape = (e) => {
    if (e.code === 'Escape') {
      showModalWindow();
    }
  };

  const onSubmit = () => {
    const obj = {
      url, price, description, currency, title, country, active, id, order 
    };
    
    data
      .addNewItem(obj)
      .then((res) => addNewProduct(res));

    showModalWindow();
  };
  
  return (
    <ModalWindowView 
      onSubmit={onSubmit}
      showModalWindow={showModalWindow}
      setUrl={setUrl}
      setPrice={setPrice}
      setTitle={setTitle}
      setDescription={setDescription}
      setCurrency={setCurrency}
      setCountry={setCountry}
    />
  );
}

export default ModalWindow;

ModalWindow.propTypes = {
  addNewProduct: PropTypes.func,
  showModalWindow: PropTypes.func,
  initId: PropTypes.string,
  initOrder: PropTypes.number
};

ModalWindow.defaultProps = { 
  addNewProduct: () => null,
  showModalWindow: () => null,
  initId: 'default id',
  initOrder: 'default order'
};
