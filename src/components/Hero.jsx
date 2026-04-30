import styled from "styled-components";

const StyledHero = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 485px;

    h1 {
        font-size: 72px;
        font-weight: 600;
        text-align: center;
        color: var(--neutral-100);
        line-height: 83px;
    }
`

export default function Hero() {
    return (
        <StyledHero>
            <h1>Interfaces limpas,<br/>soluções inteligentes.</h1>
        </StyledHero>
    )
}