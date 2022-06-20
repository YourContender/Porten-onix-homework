import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CardWatchView from './CardWatchView';
import './CardWatch.sass';

class CardWatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spinner: false
    };
  }

  onActiveItem = (e, id) => {
    const { onActiveCard } = this.props;
    return e.target.textContent !== 'Удалить' && onActiveCard(id);
  };

  removeCard = (id) => {
    const { removeItem } = this.props;
    this.setState({
      spinner: true
    });

    removeItem(id);
  };
    
  render() {
    const {
      item, dragStartHandler, dragEndHandler, dragOverHandler, dropHandler, onActiveCard 
    } = this.props;
    const { url, active, id } = item;
    const { spinner } = this.state;
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
        onClick={(e) => this.onActiveItem(e, id)}
      >
        <CardWatchView 
          photoLink={photoLink}
          item={item}
          activeClass={activeClass}
          removeCard={this.removeCard}
          onActiveCard={onActiveCard}
          spinner={spinner}
        />
      </Card>
    );
  }
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
