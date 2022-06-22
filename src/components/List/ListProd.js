import React, { useState, useEffect, useContext } from 'react';
import Filtered from './Filter/Filtered';
import CardWatch from './Card/CardWatch';
import Request from '../../request';
import ModalWindow from './Modal-window/ModalWindow';
import './ListProd.sass';
import TestContect from '../../context';

function ListProd() {
  const [filtered, setFiltered] = useState([]);
  const [database, setDatabase] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [newCard, setNewCard] = useState(null);
  const [load, setLoad] = useState(false);
  
  const value = useContext(TestContect);

  const data = new Request();

  useEffect(() => {
    getRequest();
  }, []);

  const getRequest = () => {
    data
      .getData()
      .then((res) => {
        setFiltered(res);
        setDatabase(res);
      });
  };

  const showModalWindow = () => {
    setShowModal(!showModal);
  };

  const cancelFilterMethod = () => {
    setFiltered([...database]);
    setShowModal(false);
  };

  const filteredPriceMethod = (id) => {
    setFiltered([...filtered].sort((a, b) => (a.price - b.price) * (id === '1' ? 1 : -1)));
  };

  const filteredCountryMethod = (country) => {
    setFiltered([...database]);
    setShowModal(false);
    const resFilter = filtered.filter((item) => item.country === country).sort((a, b) => a.order - b.order);

    setFiltered(resFilter);
  };

  const addNewProduct = (prod) => {
    setDatabase([prod, ...database]);
    setFiltered([prod, ...filtered]);
  };

  const removeItem = (id) => {
    data
      .deleteItem(filtered, id)    
      .then((res) => {
        setFiltered(res);
        setDatabase(res);
      });
  };

  const onActiveCard = (id) => {
    const filtered = [...filtered].map((item) => {
      return { ...item, active: item.id === id ? !item.active : item.active };
    });

    setFiltered(filtered);
  };

  const dragStartHandler = (item) => {
    setCurrentCard({ ...item });
  };

  const dragEndHandler = () => {
    setNewCard({ newCard: null });
  };

  const dragOverHandler = (e, card) => {
    e.preventDefault(); 

    if (JSON.stringify(newCard) !== JSON.stringify(card)) {
      setNewCard({ newCard: card });
    }
  };

  const dropHandler = (e, card) => {
    e.preventDefault(); 

    const res = filtered.map((item) => {
      if (item.id === card.id) {
        return { ...item, order: currentCard.order };
      }

      if (item.id === currentCard.id) {
        return { ...item, order: card.order };
      }

      return item;
    });

    return setFiltered([...res.sort((a, b) => a.order - b.order)]);
  };

  return (
    <div className={value !== 'light' ? 'list_container_dark' : 'list_container_light'}>
      {
        showModal 
            && (
              <ModalWindow 
                showModalWindow={() => showModalWindow()}
                addNewProduct={addNewProduct}
                order={filtered.length}
                id={filtered[filtered.length - 1].id}
              />
            )
      }
      <div className="filter">
        <Filtered 
          showModalWindow={showModalWindow} 
          filteredPriceMethod={filteredPriceMethod}
          filteredCountryMethod={filteredCountryMethod} 
          cancelFilterMethod={cancelFilterMethod}
        />
      </div>

      <div className="list_items">
        {
          filtered.map((item) => {
            return (
              <CardWatch 
                dragStartHandler={dragStartHandler}
                dragEndHandler={dragEndHandler}
                dragOverHandler={dragOverHandler}
                dropHandler={dropHandler}
                item={item} 
                key={item.id} 
                removeItem={removeItem}
                onActiveCard={onActiveCard}
                load={load}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default ListProd;
