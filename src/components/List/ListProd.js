import React       from "react";
import { data }    from '../../data';
import ModalWindow from './Modal-window/ModalWindow';
import CardWatch   from './Card/CardWatch';
import Filtered    from './Filter/Filtered';
import './ListProd.sass';

class ListProd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filtered: [...data],
            database: [...data],
            showModal: false,
            currentCard: null,
            newCard: null,
            idActiveCard: null
        }
    }

    showModalWindow = () => {
        this.setState(({showModal}) => ({
            showModal: !showModal
        }))
    }

    cancelFilterMethod = () => {
        this.setState({
            filtered: [...this.state.database],
            showModal: false
        })
    }

    filteredPriceMethod = (id) => {
        this.setState(({filtered}) => ({
            filtered: [...filtered].sort((a, b) => (a.price - b.price) * (id === 1 ? 1 : -1))
        }))
    }

    filteredCountryMethod = (country) => {
        this.setState({
            filtered: [...this.state.database],
            showModal: false
        })

        this.setState(({filtered}) => ({
            filtered: filtered.filter(item => item.country === country).sort((a, b) => a.order - b.order)
        }))
    }

    addNewProduct = (prod) => {
        this.setState(({database}) => ({
            database: [prod, ...database]
        }))

        this.setState(({filtered}) => ({
            filtered: [prod, ...filtered]
        }))
    }

    removeItem = (id) => {
        this.setState(({filtered, database}) => ({
            filtered: filtered.filter(item => item.id !== id),
            database: database.filter(item => item.id !== id)
        }))
    }

    onActiveCard = (id) => {  
        this.setState(({filtered}) => ({
            filtered: filtered.map(item => {
                if (item.id === id) {
                    item.active = !item.active
                }
                return item
            })
        }))
    }

    dragStartHandler = (item) => {
        this.setState({
            currentCard: {...item}
        })
    }

    dragEndHandler = () => {
        this.setState({ newCard: null });
    }

    dragOverHandler = (e, card) => {
        e.preventDefault(); 

        if (JSON.stringify(this.state.newCard) !== JSON.stringify(card)) {
            this.setState({ newCard: card });
        }
    }

    dropHandler = (e, card) => {
        e.preventDefault(); 
        
        let res = this.state.filtered.map(item => {
            if (item.id === card.id) {
                return {...item, order: this.state.currentCard.order}
            }

            if (item.id === this.state.currentCard.id) {
                return {...item, order: card.order}
            }

            return item
        })

        return (
            this.setState({
                filtered: [...res.sort((a, b) => a.order - b.order)]
            })
        )
    }

    render() {
        const { showModal, filtered } = this.state;

        return (
            <div className='list_container'>
                {
                    showModal && 
                        <ModalWindow 
                            showModalWindow={() => this.showModalWindow()}
                            addNewProduct={this.addNewProduct}
                            order={filtered.length}
                        />
                }
                <div className='filter'>
                    <Filtered 
                        showModalWindow={this.showModalWindow} 
                        filteredPriceMethod={this.filteredPriceMethod}
                        filteredCountryMethod={this.filteredCountryMethod} 
                        cancelFilterMethod={this.cancelFilterMethod}
                    />
                </div>

                <div className='list_items'>
                    {
                        filtered.map(item => {
                            return(
                                <CardWatch 
                                    dragStartHandler={this.dragStartHandler}
                                    dragEndHandler={this.dragEndHandler}
                                    dragOverHandler={this.dragOverHandler}
                                    dropHandler={this.dropHandler}
                                    item={item} 
                                    key={item.id} 
                                    removeItem={this.removeItem}
                                    onActiveCard={this.onActiveCard}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListProd;