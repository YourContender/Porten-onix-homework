import React from 'react';
import watch from '../../img/logo/watch.png';
import './Commercial.sass';

class Commercial extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {
    const { data } = this.state;

    return (
      <section>
        <div className="container">
          <div className="title">
            <h4>New Arrivals</h4>
            <div className="line" />
          </div>
          <div className="commercial">
            {
              data.map(({ title, price, id }) => {
                return (
                  <div className="commercial_item" key={id}>
                    <div className="commercial_item_block">
                      <img src={watch} alt="logo" />
                    </div>
                    <div className="commercial_item_text">
                      <span>{title}</span>
                      <br />
                      <span>{price}</span>
                    </div>
                  </div>
                );
              })
            }
          </div>
          <div>
            <button type="button" className="commercial_btn">смотреть еще</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Commercial;
