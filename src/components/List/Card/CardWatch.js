import React from "react";
import { Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";
import './CardWatch.sass';

class CardWatch extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            test: '',
            id: this.props.item.id
        }
    }
    
    onActiveItem = (id) => {
        this.props.onActiveCard(id)
    }   

    render () {
        const { url, title, description, price, currency, country, id, active} = this.props.item;
        const { dragStartHandler, dragEndHandler, dragOverHandler, dropHandler } = this.props;
        const item = this.props.item;
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
                onClick={() => this.onActiveItem(id)}
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
                        <ListGroupItem><strong>Currency: </strong>{currency ? currency :  this.props.defaultCurrency}</ListGroupItem> 
                        
                        <ListGroupItem><strong>Country: </strong>{country ? country :  this.props.defaultCountry}</ListGroupItem>
                    </ListGroup>
                    <div className="card_btns">
                        <Button variant="danger" className="delete_btn" onClick={() => this.props.removeItem(id)}>Удалить</Button>
                        <Button variant="primary">Купить</Button>
                    </div>
                </div>
            </Card>
        )
    }
}

CardWatch.defaultProps = {
    defaultCurrency: 'UAH',
    defaultCountry: 'Ukraine'
}

export default CardWatch;

