import { Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";
import React     from "react";
import PropTypes from 'prop-types';
import './CardWatch.sass';

function CardWatch({item, dragStartHandler, dragEndHandler, dragOverHandler, dropHandler, removeItem, onActiveCard}) {  
    const onActiveItem = (e, id) => {
        e.target.textContent != 'Удалить' && onActiveCard(id)
    }   

    const { url, title, description, price, currency, country, id, active } = item;
    const photoLink = typeof url === 'string' ? url : url.path + '.' + url.extension;
    const activeClass = active ? "test_active" : '';

    return (
        <Card 
            onDragStart={() => dragStartHandler(item)}
            onDragLeave={() => dragEndHandler()}
            onDragEnd={() => dragEndHandler()}
            onDragOver={(e) => dragOverHandler(e, item)}
            onDrop={(e) => dropHandler(e, item)}
            draggable={true}
            className="card_container" 
            onClick={(e) => onActiveItem(e, id)}
        >
            <div className={activeClass}>
                <Card.Img className="card_img" variant="top" src={photoLink} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.length > 15 ? description.split(' ').slice(0, 11).join(' ') : null}
                        {description.length === 0 && 'К этому товару описание не было добавлено. Подробнее о нем вы можете узнать у продавца'}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="card_descr">
                        <strong className="card_descr_price">Price: </strong> {price}
                    </ListGroupItem>
                    <ListGroupItem><strong>Currency: </strong>{currency}</ListGroupItem> 
                    
                    <ListGroupItem><strong>Country: </strong>{country}</ListGroupItem>
                </ListGroup>
                <div className="card_btns">
                    <Button variant="danger" className="delete_btn" onClick={() => removeItem(id)}>Удалить</Button>
                    <Button variant="primary">Купить</Button>
                </div>
            </div>
        </Card>
    )
}

CardWatch.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    currency: PropTypes.string,
    country: PropTypes.string,
    id: PropTypes.string,
    active: PropTypes.bool,
}

export default CardWatch;

