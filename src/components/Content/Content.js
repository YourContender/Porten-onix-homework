import React            from "react";
import watch            from '../../img/logo/watch.png';
import { database }     from "../../database";
import './Content.sass';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getRandomItems();
    }

    getRandomIndex = () => {
        return Math.floor(Math.random() * (database.length - 1) + 1)
    }

    getRandomItems = () => {
        let result = new Array(3).fill('').map(item => item = database[this.getRandomIndex()]);
        
        return this.setState(({ data }) => ({
            data: [...data, ...result]
        }))
    }

    render() {
        const { data } = this.state;
    
        return (
            <section>
                <div className="content">
                    <div className="content_season">
                        
                        <div className="content_season_title">
                            <h2>СЕЗОН 2020/21</h2>
                            <div className="line"></div>
                        </div>
                        
                        <div className="content_season_list">
                            {
                                data.map((item, i) => {
                                    const { title, price } = item;

                                    return (
                                        <div className="item" key={i}>
                                            <div className="block">
                                                <img src={watch} alt="logo"/>
                                            </div>
                                            <div className="text">
                                                <span>{title}</span><br/>
                                                <span>{price}</span>
                                            </div>
                                        </div>
                                    )
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
                                <button className="btn_block">Collection</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Content;