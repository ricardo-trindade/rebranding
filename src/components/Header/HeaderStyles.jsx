import styled from 'styled-components'

export const StyledHeader = styled.header`
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

    img {
        width: 160px;
        height: 40px;
    }

    nav ul {
        display: flex;
        align-items: center;
        gap: 32px;
    }

    .portfolio-link {
        color: var(--tertiary-color);
    }   

    .start-button {
        background-color: var(--tertiary-color);
    }

`;