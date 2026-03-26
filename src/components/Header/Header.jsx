import { StyledHeader } from './Header.styles'
import logo from '../../assets/logo.svg'

export default function Header() {
    return (
        <StyledHeader>
            <img src={logo} alt="Logo da empresa" />
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="" className='portfolio-link'>Portfolio</a></li>
                    <li><a href="" className='start-button'>Start</a></li>
                </ul>
            </nav>
        </StyledHeader>         
    )
}