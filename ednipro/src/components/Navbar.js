function Navbar({ variant }) {
    return (
        <div id="home" className={`navbar${variant === "footer" ? " footer" : ""}`}>
            <div className="mainContainer">
                <div className="navbarContent">
                    <div className="navbarElements">
                        <div className="logo">
                            <a href="#home"><img src="img/logo.png" alt="logo"></img></a>
                        </div>
                        {variant === "footer" ? (
                            <div className="footerContent">
                                <p>© 2025 Музеї Дніпра</p>
                            </div>
                        ) : (
                            <div className="menu">
                                <ul>
                                    <ol><a href="#museums">Музеї</a></ol>
                                    <ol><a href="#contacts">Контакти</a></ol>
                                </ul>
                                <div className="socials">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <img src="svg/facebook.svg" alt="Facebook" />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <img src="svg/instagram.svg" alt="Instagram" />
                                    </a>
                                    <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
                                        <img src="svg/telegram.svg" alt="Telegram" />
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
