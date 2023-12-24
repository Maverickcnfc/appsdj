import "./style.css"

const Header = () => {
    return (
        <header className="header">
            <div className="header-img">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>Добро пожаловать  </strong><br />
                        на сайт <em>djsserov.mahost.online</em>
                    </h1>
                </div>
            </div>
        </header>
    );
}

export default Header;