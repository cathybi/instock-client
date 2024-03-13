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
            <div className="header-background"></div>

            <nav className="nav">

                <Link to="/warehouse" className="nav__logo-link" >
                    <img src={logo} className="nav__logo" alt="logo" />
                </ Link>

                <div className="nav__page-link">
                    <NavLink ClassName="nav__link" to="/warehouse" >
                        <h3 className="nav__link-title">Warehouses</h3>
                    </ NavLink>
                    <NavLink ClassName="nav__link" to="/inventory" >
                        <h3 className="nav__link-title">Inventory</h3>
                    </ NavLink>
                </div>

            </nav>
        </>
    )
}

export default Header