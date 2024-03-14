import './Header.scss';
import logo from '../../assets/logos/InStock-Logo_2x.png';
import { Link, NavLink } from 'react-router-dom';

/**
 * 
 * 
 * 
 * @returns 
 */

function Header() {
    return (
        <>
            <div className="header-background">

            <nav className="nav">

                <Link to="/warehouse" className="nav__logo-link" >
                    <img src={logo} className="nav__logo" alt="logo" />
                </ Link>

                <div className="nav__page">
                    <NavLink activeClassName="nav__link-active" to="/warehouse" ClassName="nav__link" >
                        <h3 className="nav__title">Warehouses</h3>
                    </ NavLink>
                    <NavLink activeClassName="nav__link-active" to="/inventory" ClassName="nav__link" >
                        <h3 className="nav__title">Inventory</h3>
                    </ NavLink>
                </div>

            </nav>

            </div>
        </>
    )
}

export default Header;