import styled from 'styled-components'
import logo from '../assets/icons/logo.svg'
import menuHamburger from '../assets/icons/menu-hamburger-icon.svg'

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;

    padding: 0px 48px 0px 48px;

    width: 100%;
    height: 107px;

    font-size: 15px;
    font-weight: Medium;
    color: var(--neutral-200);

    background-color: var(--header-background);

    img {
        width: 160px;
        height: 40px;
    }

    .navigation ul {
        display: flex;
        align-items: center;
        gap: 32px;    
    }

    .common-link { color: var(--neutral-200) }
    .common-link:hover { color: var(--hover-neutral-200); }
    .common-link:active { color: var(--active-neutral-200) }

    .portfolio-link { color: var(--tertiary-color); }   
    .portfolio-link:hover { color: var(--blue-hover); }
    .portfolio-link:active { color: var(--blue-active); }

    .start-button {
        background-color: var(--tertiary-color);
        color: var(--neutral-100);

        width: 85px;
        height: 43px;

        border-radius: 6px;

        display: inline-block;
        text-align: center;
        line-height: 43px;
    }

    .start-button:hover { background-color: var(--blue-hover); }
    .start-button:active { background-color: var(--blue-active); }

    .hamburger-menu { display: none; }

    @media (max-width: 768px) {

        nav { display: none; }

        .hamburger-menu {
            display: flex;
            
            width: 43px;

            cursor: pointer;
            background: none;
            border: none;
        }

        .hamburger-menu:hover img { filter: brightness(0.8); }
        .hamburger-menu:active img { filter: brightness(0.6); }
    }

`;

export default function Header() {

    return (
        <StyledHeader>
            <img src={logo} alt="Logo da empresa" />

            <nav className='navigation'>
                <ul>
                    <li><a href="" className='common-link'>Home</a></li>
                    <li><a href="" className='common-link'>Contato</a></li>
                    <li><a href="" className='portfolio-link'>Portfolio</a></li>
                    <li><a href="" className='start-button'>Começar</a></li>
                </ul>
            </nav>

            <button className='hamburger-menu'>
                <img src={menuHamburger} alt="Menu" />
            </button>

        </StyledHeader>         
    )
}