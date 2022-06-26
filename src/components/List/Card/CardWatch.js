import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CardWatchView from './CardWatchView';
import './CardWatch.sass';

function CardWatch({
  removeItem, item, dragStartHandler, dragEndHandler, dragOverHandler, dropHandler, onActiveCard 
}) {
  const [spinner, setSpinner] = useState(false);

  const onActiveItem = (e, id) => {
    return e.target.textContent !== 'Удалить' && onActiveCard(id);
  };

  const removeCard = (id) => {
    setSpinner(true);
    removeItem(id);
  };
    
  const { url, active, id } = item;
  const photoLink = typeof url === 'string' ? url : `${url.path}.${url.extension}`;
  const activeClass = active ? 'test_active' : '';

  return (
    <Card 
      onDragStart={() => dragStartHandler(item)}
      onDragLeave={() => dragEndHandler()}
      onDragEnd={() => dragEndHandler()}
      onDragOver={(e) => dragOverHandler(e, item)}
      onDrop={(e) => dropHandler(e, item)}
      draggable
      className="card_container" 
      onClick={(e) => onActiveItem(e, id)}
    >
      <CardWatchView 
        photoLink={photoLink}
        item={item}
        activeClass={activeClass}
        removeCard={removeCard}
        onActiveCard={onActiveCard}
        spinner={spinner}
      />
    </Card>
  );
}

CardWatch.propTypes = {
  item: PropTypes.object,  // eslint-disable-line
  url: PropTypes.string,
  id: PropTypes.string,
  active: PropTypes.bool,
  dragStartHandler: PropTypes.func,
  dragEndHandler: PropTypes.func,
  dragOverHandler: PropTypes.func,
  dropHandler: PropTypes.func,
  onActiveCard: PropTypes.func,
  removeItem: PropTypes.func
};

CardWatch.defaultProps = { 
  item: [],
  url: '',
  id: '',
  active: false, 
  dragStartHandler: () => null,
  dragEndHandler: () => null,
  dragOverHandler: () => null,
  dropHandler: () => null,
  onActiveCard: () => null,
  removeItem: () => null
};

export default CardWatch;
