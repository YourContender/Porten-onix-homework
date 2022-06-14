export default function FooterView({category}) {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="footer_block">
                        <div className="footer_about">
                            <h4>About shop</h4>
                            <div className="footer_about_box">
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper 
                                    viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet 
                                    consectetur vel vitae aliquam dictum suspendisse. Lobortis eget 
                                    consequat, tellus et et sed turpis. Pretium quisque vitae, amet, 
                                    porttitor odio ultricies massa pharetra leo. Et ipsum urna fames 
                                    in sit mi ultrices nisi, nunc.
                                </span>
                            </div>
                        </div>
                        <div className="footer_category">
                            <h4>Категории</h4>
                            <div className="footer_category_list">
                                {
                                    category.map((item, i) => {
                                        return (
                                            <div className="item" key={i}>
                                                <span>{item}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="footer_link">
                            <h4>Рaссылка</h4>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.
                            </span>
                            <div className="footer_link_box">
                                <input className="input" placeholder="enter your e-mail" type="text"/>
                                <button>подписаться</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="info">
                    <span>Сделал: Саенко Сергей</span>
                    <a target="_blank" rel="noreferrer" href="https://github.com/YourContender">Мой GitHub</a>
                    <a target="_blank" rel="noreferrer" href="https://www.figma.com/file/0a01UVA3pCxrJTXErEGLho/PORTEN?node-id=0%3A1">Оригинал дизайна</a>
                </div>
                <div>
                    <span>© 2022</span>
                </div>
            </div>
        </footer>
    )
}