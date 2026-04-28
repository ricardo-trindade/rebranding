import styled from "styled-components";
import iconOne from '../assets/icons/icon-one.svg'
import iconTwo from '../assets/icons/icon-two.svg'
import iconThree from '../assets/icons/icon-three.svg'

const StyledSpecialities = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    padding: 120px 0 120px 0;

    width: 100%;
    height: 745px;

    background-color: var(--secondary-color);

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
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
        display: flex;
        flex-direction: column;
        gap: 12px;
        
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

    .icon-container {
        width: 48px;
        height: 48px;
        border-radius: 6px;
        background-color: var(--icon-background);
        margin-bottom: 12px;
    }

    .icons {
        height: 24px;
        width: 24px;

        margin: 11px;
        background-color: var(--icon-background);
    }
`

export default function Specialities() {
    return (
        <StyledSpecialities>
            <div className="title">
                <h3 id="Specialities">ESPECIALIDADES</h3>
                <h2>Elevando o padrão <br/> do seu produto digital</h2>
            </div>
            <div className="card-group">
                <div className="card">
                    <div className="icon-container">
                        <img src={iconOne} alt="UI Design" aria-hidden="true" className="icons"/>
                    </div>
                    <h3 className="card-title">UI Design</h3>
                    <p className="card-description">Criamos interfaces visuais deslumbrantes, minimalistas e consistentes que comunicam o valor da sua marca no primeiro olhar.</p>
                </div>
                <div className="card">
                    <div className="icon-container">
                        <img src={iconTwo} alt="UX Research" aria-hidden="true" className="icons"/>
                    </div>
                    <h3 className="card-title">UX Research</h3>
                    <p className="card-description">Mergulhamos fundo nas necessidades dos seus usuários para desenhar fluxos intuitivos e eliminar atritos na jornada de uso.</p>
                </div>
                <div className="card">
                    <div className="icon-container">
                        <img src={iconThree} alt="Design Systems" aria-hidden="true" className="icons"/>
                    </div>
                    <h3 className="card-title">Design Systems</h3>
                    <p className="card-description">Padronizamos componentes e regras de design para que sua equipe de desenvolvimento construa mais rápido e com zero retrabalho.</p>
                </div>
            </div>
        </StyledSpecialities>
    )
}
