import {
  Button, ListGroupItem, ListGroup, Spinner, Card 
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next"; 

function CardWatchView({
  activeClass, item, photoLink, spinner, removeCard 
}) {
  const {t} = useTranslation();
  return (
    <div className={activeClass}>
      <Card.Img className="card_img" variant="top" src={photoLink} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description.length > 15 ? item.description.split(' ').slice(0, 11).join(' ') : null}
          {item.description.length === 0 && 'К этому товару описание не было добавлено.'}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className="card_descr">
          <strong className="card_descr_price">{t('price-card')}: </strong> 
          {' '}
          {item.price}
        </ListGroupItem>
        <ListGroupItem>
          <strong>{t('currency-card')}: </strong>
          {item.currency}
        </ListGroupItem> 
                
        <ListGroupItem>
          <strong>{t('country-card')}: </strong>
          {item.country}
        </ListGroupItem>
      </ListGroup>
      <div className="card_spinner">
        {spinner && <Spinner animation="border" />}
      </div>
      <div className="card_btns">
        <Button 
          variant="danger" 
          className="delete_btn" 
          name="delete" 
          onClick={() => removeCard(item.id)}
        >
          {t('remove')} 
        </Button>
        <Button 
          variant="primary"
        >
          {t('buy')}
        </Button>
      </div>
    </div>
  );
}

CardWatchView.propTypes = { 
  activeClass: PropTypes.string,
  item: PropTypes.object,  // eslint-disable-line
  photoLink: PropTypes.string, 
  spinner: PropTypes.bool, 
  removeCard: PropTypes.func
};
  
CardWatchView.defaultProps = { 
  activeClass: null,
  item: [], 
  photoLink: '', 
  spinner: false, 
  removeCard: () => null
};

export default CardWatchView;
