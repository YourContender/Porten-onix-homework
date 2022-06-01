import React     from "react";
import log       from '../../img/logo/log.png';
import iconPhone from '../../img/logo/phone-icon.png';
import './Header.sass'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header_info">
                        <div className="header_info_link">  
                            <img src={iconPhone} alt="phone_icon"/>
                            <span>8 (812) 123-45-67</span>
                        </div>
                        <div className="header_info_link">
                            <span>Работаем 7 дней в неделю</span>
                        </div>
                        <div className="header_info_link">
                            <span>9:00 — 18:00</span>
                        </div>
                    </div>
                    <div className="header_log">
                        <img src={log} alt="log"/>
                        <span>Войти / Регистрация</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;