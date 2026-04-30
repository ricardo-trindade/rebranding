import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 102px;

    padding: 0px 48px 0px 48px;

    .copyright {
        font-size: 14px;
        font-weight: 400;
        color: var(--neutral-200);
    }

    .social-media ul {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 24px;
        color: var(--neutral-200);
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <span className="copyright">© 2025 Suporte de Domingo. Todos os direitos reservados.</span>
            <nav className="social-media">
                <ul>
                    <li><a href="" className='footer-link'>Dribbble</a></li>
                    <li><a href="" className='footer-link'>LinkedIn</a></li>
                    <li><a href="" className='footer-link'>Twitter</a></li>
                </ul>
            </nav>
        </StyledFooter>
    )
}