import styled from "styled-components";

export const StyledSpecialities = styled.section`
    border: 3px solid red;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 745px;

    background-color: var(--secondary-color);

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title > h3 {
        font-size: 14px;
        font-weight: 600;
        color: var(--tertiary-color);
    }

    .title > h2 {
        font-size: 40px;
        font-weight: 600;
        color: var(--neutral-100);
        text-align: center;
    }

    .card-group {
        display: flex;
        flex-direction: row;
        justify-content: center;

        height: 292px;
        width: 78%;
        gap: 32px;
    }

    .card {
        background-color: var(--card-background);
        border-radius: 8px;
        padding: 40px;
    }

    .card-title {
        font-size: 20px;
        font-weight: 600;
        color: var(--neutral-100);
    }

    .card-description {
        font-size: 15px;
        font-weight: 400;
        color: var(--neutral-200);
    }

    .icons {
        height: 18px;
        width: 18px;

        background-color: var(--icon-background);
    }
`
