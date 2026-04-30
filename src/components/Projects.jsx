import styled from "styled-components";
import firstProjectImage from '../assets/img/first-project-image.png'
import secondProjectImage from '../assets/img/second-project-image.png'

const StyledProjects = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    padding: 120px 0 120px 0;

    width: 100%;
    height: 810px;

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .projects-group {
        display: flex;
        flex-direction: row;
        gap: 41px;
        justify-content: center;

        height: 548px;
        width: 100%;
    }

    .project-card {
        display: flex;
        flex-direction: column;
        gap: 7px;

        height: 100%;
    }

    .project-card > img {
        width: 100%;
        height: 77%;
        
        border-radius: 8px;
        margin-bottom: 17px;
    }
    
    .project-card > span {
        font-size: 15px;
        font-weight: 400;
        color: var(--neutral-200);
    }
`
 
export default function Projects() {
    return (
        <StyledProjects>
            <div className="title">
                <h4>NOSSO TRABALHO</h4>
                <h2 id="Projects">Projetos selecionados</h2>
            </div>
            <div className="projects-group">
                <div className="project-card">
                    <img src={firstProjectImage} alt="Plataforma Financeira" />
                    <h3>Plataforma Financeira</h3>
                    <span>UI/UX Design • Web App</span>
                </div>
                <div className="project-card">
                    <img src={secondProjectImage} alt="App de E-commerce" />
                    <h3>App de E-commerce</h3>
                    <span>Product Design • Mobile</span>
                </div>
            </div>
        </StyledProjects>
    )
}