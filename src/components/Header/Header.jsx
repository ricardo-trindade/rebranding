import { StyledHeader } from './HeaderStyles'
import logo from '../../assets/icons/logo.svg'
import menuHamburger from '../../assets/icons/menu-hamburger-icon.svg'
import { useState } from 'react'

export default function Header() {
    useState

    return (
        <StyledHeader>
            <img src={logo} alt="Logo da empresa" />

            <nav>
                <ul>
                    <li><a href="" className='home-link'>Home</a></li>
                    <li><a href="" className='contact-link'>Contact</a></li>
                    <li><a href="" className='portfolio-link'>Portfolio</a></li>
                    <li><a href="" className='start-button'>Start</a></li>
                </ul>
            </nav>

            <button className='hamburger-menu'>
                <img src={menuHamburger} alt="Menu" />
            </button>

        </StyledHeader>         
    )
}