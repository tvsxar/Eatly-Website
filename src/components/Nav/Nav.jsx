import './Nav.scss';
import Button from '../Button/Button';

function Nav() {
    return (
        <div className="nav-bar">
            <ul className="nav-menu">
                <li><a href="#!" className="nav-item">Menu</a></li>
                <li><a href="#!" className="nav-item">Blog</a></li>
                <li><a href="#!" className="nav-item">Pricing</a></li>
                <li><a href="#!" className="nav-item">Contact</a></li>
            </ul>

            <div className="login-buttons">
            <a href="#!" className="nav-item bold">Login</a>
            <Button>Sign Up</Button>
            </div>
        </div>
    )
}

export default Nav;