import React from 'react';
import Filtered from './Filter/Filtered';
import CardWatch from './Card/CardWatch';
import Request from '../../request';
import ModalWindow from './Modal-window/ModalWindow';
import './ListProd.sass';

class ListProd extends React.Component {
  constructor(props) { // eslint-disable-line
    super(props);

    this.state = {
      filtered: [],
      database: [],
      showModal: false,
      currentCard: null,
      newCard: null,
      load: false
    };
  }

  data = new Request();

  componentDidMount() {
    this.getRequest();
  }

  getRequest = () => {
    this.data
      .getData()
      .then((res) => this.setState({
        filtered: res,
        database: res
      }));
  };

  showModalWindow = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
  };

  cancelFilterMethod = () => {
    const { database } = this.state;
    this.setState({
      filtered: [...database],
      showModal: false
    });
  };

  filteredPriceMethod = (id) => {
    this.setState(({ filtered }) => ({
      filtered: [...filtered].sort((a, b) => (a.price - b.price) * (id === '1' ? 1 : -1))
    }));
  };

  filteredCountryMethod = (country) => {
    const { database } = this.state;
    this.setState({
      filtered: [...database],
      showModal: false
    });

    this.setState(({ filtered }) => ({
      filtered: filtered.filter((item) => item.country === country).sort((a, b) => a.order - b.order)
    }));
  };

  addNewProduct = (prod) => {
    this.setState(({ database }) => ({
      database: [prod, ...database]
    }));

    this.setState(({ filtered }) => ({
      filtered: [prod, ...filtered]
    }));
  };

  removeItem = (id) => {
    const { filtered } = this.state;

    this.data
      .deleteItem(filtered, id)    
      .then((res) => this.setState({
        filtered: res,
        database: res
      }));
  };

  onActiveCard = (id) => {
    this.setState(({ filtered }) => ({
      filtered: [...filtered].map((item) => {
        return { ...item, active: item.id === id ? !item.active : item.active };
      })
    }));
  };

  dragStartHandler = (item) => {
    this.setState({
      currentCard: { ...item }
    });
  };

  dragEndHandler = () => {
    this.setState({ newCard: null });
  };

  dragOverHandler = (e, card) => {
    e.preventDefault(); 

    const { newCard } = this.state;

    if (JSON.stringify(newCard) !== JSON.stringify(card)) {
      this.setState({ newCard: card });
    }
  };

  dropHandler = (e, card) => {
    e.preventDefault(); 

    const { filtered, currentCard } = this.state;
        
    const res = filtered.map((item) => {
      if (item.id === card.id) {
        return { ...item, order: currentCard.order };
      }

      if (item.id === currentCard.id) {
        return { ...item, order: card.order };
      }

      return item;
    });

    return (
      this.setState({
        filtered: [...res.sort((a, b) => a.order - b.order)]
      })
    );
  };

  render() {
    const { showModal, filtered, load } = this.state;

    return (
      <div className="list_container">
        {
            showModal 
                && (
                <ModalWindow 
                  showModalWindow={() => this.showModalWindow()}
                  addNewProduct={this.addNewProduct}
                  order={filtered.length}
                  id={filtered[filtered.length - 1].id}
                />
                )
        }
        <div className="filter">
          <Filtered 
            showModalWindow={this.showModalWindow} 
            filteredPriceMethod={this.filteredPriceMethod}
            filteredCountryMethod={this.filteredCountryMethod} 
            cancelFilterMethod={this.cancelFilterMethod}
          />
        </div>

        <div className="list_items">
          {
                filtered.map((item) => {
                  return (
                    <CardWatch 
                      dragStartHandler={this.dragStartHandler}
                      dragEndHandler={this.dragEndHandler}
                      dragOverHandler={this.dragOverHandler}
                      dropHandler={this.dropHandler}
                      item={item} 
                      key={item.id} 
                      removeItem={this.removeItem}
                      onActiveCard={this.onActiveCard}
                      load={load}
                    />
                  );
                })
            }
        </div>
      </div>
    );
  }
}

export default ListProd;
