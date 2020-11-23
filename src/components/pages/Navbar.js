import React, {useState, useEffect} from 'react'
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
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Бидний тухай
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Hub
                </Link>
            </li>
            <li className='nav-btn'>
                {button ? (
                    <Link to='/signin' className='btn-link'>
                        <Button buttonStyle='btn--outline'>Нэвтрэх</Button>
                    </Link>
                ):(
                <Link to='/signin' className='btn-link'>
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Нэвтрэх</Button>
                </Link>
            )}
            </li>
            <li className='nav-btn'>
                {button ? (
                    <Link to='/signout' className='btn-link'>
                        <Button buttonStyle='btn--outline'>Гарах</Button>
                    </Link>
                ):(
                <Link to='/signout' className='btn-link'>
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Гарах</Button>
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
