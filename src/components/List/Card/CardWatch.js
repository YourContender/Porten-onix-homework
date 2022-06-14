import React         from "react";
import { Card }      from "react-bootstrap";
import PropTypes     from 'prop-types';
import CardWatchView from "./CardWatchView";
import './CardWatch.sass';

class CardWatch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            spinner: false
        }
    }

    onActiveItem = (e, id) => {
        e.target.textContent !== 'Удалить' && this.props.onActiveCard(id)
    }

    removeCard = (id) => {
        this.setState({
            spinner: true
        })

        this.props.removeItem(id);
    }
    
    render() {
        const { url, id, active } = this.props.item;
        const {item, dragStartHandler, dragEndHandler, dragOverHandler, dropHandler, onActiveCard} = this.props;
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
                onClick={(e) => this.onActiveItem(e, id)}
            >
                <CardWatchView 
                    photoLink={photoLink}
                    item={this.props.item}
                    activeClass={activeClass}
                    removeCard={this.removeCard}
                    onActiveCard={onActiveCard}
                    spinner={this.state.spinner}
                />
            </Card>
        )
    }
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

