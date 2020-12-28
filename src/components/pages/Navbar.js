import React, {useState, useEffect, useContext} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {FaBars, FaTimes, FaDirections} from 'react-icons/fa';
import Button from './Button';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';

function Navbar() {
    const[click, setClick] = useState(false)
    const[button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        }, [])

    window.addEventListener('resize', showButton);



    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className='navbar'>
            <div className='navbar-container container'>
             <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                 <FaDirections className='navbar-icon'/>
                 Prof
            </Link>   
            <div className='menu-icon' onClick ={handleClick}>
            {click ? <FaTimes/> :<FaBars/>}
            </div>
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Нүүр
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    Бидний тухай
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                    Hub
                </Link>
            </li>
            {/* <li className='nav-item'>
                <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                    Profile
                </Link>
            </li> */}
            <li className='nav-btn'>
                {button ? (
                    <Link to='/profile' className='btn-link'>
                        <Button buttonStyle='btn--outline'>Profile</Button>
                    </Link>
                ):(
                <Link to='/profile' className='btn-link' onClick={closeMobileMenu}>
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Profile</Button>
                </Link>
            )}
            </li>
            </ul>
            </div> 
            
        </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
