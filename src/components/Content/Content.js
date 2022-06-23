import React from 'react';
import watch from '../../img/logo/watch.png';
import './Content.sass';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          title: 'Home XVII Kiev',
          price: '195000 uah'
        }, 
        {
          id: 2,
          title: 'San XXI Toronto',
          price: '170000 uah'
        }, 
        {
          id: 3,
          title: 'City XX New York',
          price: '185000 uah'
        }
      ]
    };
  }

  render() {
    const { data } = this.state;
    
    return (
      <section>
        <div className="content">
          <div className="content_season">
                        
            <div className="content_season_title">
              <h2>СЕЗОН 2020/21</h2>
              <div className="line" />
            </div>
                        
            <div className="content_season_list">
              {
                data.map(({ title, price, id }) => {
                  return (
                    <div className="item" key={id}>
                      <div className="block">
                        <img src={watch} alt="logo" />
                      </div>
                      <div className="text">
                        <span>{title}</span>
                        <br />
                        <span>{price}</span>
                      </div>
                    </div>
                  );
                })
              }
            </div>

          </div>
          <div className="content_catalog">
            <div className="content_collection">
              <div>
                <span className="text_block">New Collection</span>
              </div>
              <div>
                <button type="button" className="btn_block">Collection</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
