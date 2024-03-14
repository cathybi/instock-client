import './Header.scss';
import logo from '../../assets/logos/InStock-Logo_2x.png';
import { Link } from 'react-router-dom';

/**
 * Header Component :  
 * INSTOCK logo  
 * Navigation Bar : warehouses, Inventory links  
 * @returns 
 */

const Header = () => {

    /**
     * Added to manage active states of "warehouse" and "inventory" links 
     * @param {*} event 
     */
    function handleLinkClick(event){
      
        if(event.target.id === "warehouse") {
            const inventory = document.getElementById("inventory");
            inventory.classList.remove("nav__title--active");           
        }

        if(event.target.id === "inventory") {
            const inventory = document.getElementById("warehouse");
            inventory.classList.remove("nav__title--active");           
        }
        event.target.classList.add("nav__title--active");
    }

    return (
        <div className="header">          
            <nav className="nav">
                <Link to="/" className="nav__logo-link" >
                    <img src={logo} className="nav__logo" alt="logo" />
                </ Link>

                <div className="nav__page">

                    <Link to="/" 
                          id="warehouse"
                        className="nav__title nav__title--active"
                        onClick={handleLinkClick}>
                        Warehouses
                    </Link>

                    <Link to="/inventory" 
                          id="inventory"
                          className="nav__title"
                          onClick={handleLinkClick}>
                        Inventory
                    </Link>

                </div>
            </nav>
        </div>
    );
}

export default Header