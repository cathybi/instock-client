import './Header.scss';
import logo from '../../assets/logos/InStock-Logo_2x.png';
import { Link, NavLink } from 'react-router-dom';

/**
 * Header Component :  
 * INSTOCK logo
 * Navigation Bar : warehouses, Inventory links  
 * @returns 
 */

const Header = () => {
    return (
        <div className="header">
            <nav className="nav">
                <Link to="/" className="nav__logo-link" >
                    <img src={logo} className="nav__logo" alt="logo" />
                </ Link>

                <div className="nav__page">

                    <NavLink className="nav__title" activeclassname="nav__title--active" to="/" >
                        Warehouses
                    </NavLink>

                    <NavLink className="nav__title" activeclassname="nav__title--active" to="/inventory" >
                        Inventory
                    </NavLink>
                    
                </div>
            </nav>
        </div>
    );
}

export default Header