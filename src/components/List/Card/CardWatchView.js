import {
  Button, ListGroupItem, ListGroup, Spinner, Card 
} from 'react-bootstrap';

function CardWatchView({
  activeClass, item, photoLink, spinner, removeCard 
}) {
  return (
    <div className={activeClass}>
      <Card.Img className="card_img" variant="top" src={photoLink} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description.length > 15 ? item.description.split(' ').slice(0, 11).join(' ') : null}
          {item.description.length === 0 && 'К этому товару описание не было добавлено. Подробнее о нем вы можете узнать у продавца'}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className="card_descr">
          <strong className="card_descr_price">Price: </strong> 
          {' '}
          {item.price}
        </ListGroupItem>
        <ListGroupItem>
          <strong>Currency: </strong>
          {item.currency}
        </ListGroupItem> 
                
        <ListGroupItem>
          <strong>Country: </strong>
          {item.country}
        </ListGroupItem>
      </ListGroup>
      <div className="card_spinner">
        {spinner && <Spinner animation="border" />}
      </div>
      <div className="card_btns">
        <Button variant="danger" className="delete_btn" onClick={() => removeCard(item.id)}>Удалить</Button>
        <Button variant="primary">Купить</Button>
      </div>
    </div>
  );
}

export default CardWatchView;
