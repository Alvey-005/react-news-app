import { Link } from 'react-router-dom';
import NewsIcon from '../../assets/svg/newsIcon.svg';
const Header = () => {
    return (
        <>
            <header className="header responsive-wrapper">
                <a href="/">
                    <div className="header-left">
                        <img src={NewsIcon || "https://via.placeholder.com/200"} alt="logo" />
                    </div>
                </a>
                <div className="header-right">
                    <nav className="header-nav">
                        <a href="#" className="header-link header-link--button">Login</a>
                    </nav>
                    <button className="header-menu-button">Menu</button>
                </div>
            </header>
        </>
    )
}
export default Header;