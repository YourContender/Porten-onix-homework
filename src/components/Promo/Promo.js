import React          from 'react';
import logoShopSecond from '../../img/logo/logo-porten-2.png';
import './Promo.sass';

function Promo() {
    return (
        <section>
            <div className="promo">
                <div className="container">
                    <div className="promo_block">

                        <div className="promo_block_item">
                            <img src={logoShopSecond} alt="logo porten"/>
                        </div>
                        
                        <div className="promo_block_text">
                            <h5>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor<br/>
                                pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum<br/>
                                nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh<br/>
                                magna feugiat id nunc, dui nisl viverra.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default Promo;