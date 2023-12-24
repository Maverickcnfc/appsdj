const Contact = () => {
    return (
        <div>
            <main className="section">
                <div className="container">
                    <h1 className="title-1">Контакты</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Местонахождение</h2>
                            <p>Москва, Россия</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">ВКонтакте | Телеграмм</h2>
                            <p>
                                <a href="https://vk.com/id443715177">vk.com/id443715177</a> |     
                                <a href="https://t.me/djsserov"> t.me/djsserov</a>
                            </p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:cnfc050607@yandex.ru">cnfc050607@yandex.ru</a></p>
                        </li>
                    </ul>

                </div>
            </main>
        </div>
    );
}

export default Contact;