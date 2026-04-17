import { StyledSpecialities } from './SpecialitiesStyles'
import iconOne from '../../assets/icons/icon-one.svg'
import iconTwo from '../../assets/icons/icon-two.svg'
import iconThree from '../../assets/icons/icon-three.svg'

export default function Specialities() {
    return (
        <StyledSpecialities>
            <div className="title">
                <h3>ESPECIALIDADES</h3>
                <h2>Elevando o padrão <br/> do seu produto digital</h2>
            </div>
            <div className="card-group">
                <div className="card">
                    <img src={iconOne} alt="UI Design" aria-hidden="true" className="icons"/>
                    <h3 className="card-title">UI Design</h3>
                    <p className="card-description">Criamos interfaces visuais deslumbrantes, minimalistas e consistentes que comunicam o valor da sua marca no primeiro olhar.</p>
                </div>
                <div className="card">
                    <img src={iconTwo} alt="UX Research" aria-hidden="true" className="icons"/>
                    <h3 className="card-title">UX Research</h3>
                    <p className="card-description">Mergulhamos fundo nas necessidades dos seus usuários para desenhar fluxos intuitivos e eliminar atritos na jornada de uso.</p>
                </div>
                <div className="card">
                    <img src={iconThree} alt="Design Systems" aria-hidden="true" className="icons"/>
                    <h3 className="card-title">Design Systems</h3>
                    <p className="card-description">Padronizamos componentes e regras de design para que sua equipe de desenvolvimento construa mais rápido e com zero retrabalho.</p>
                </div>
            </div>
        </StyledSpecialities>
    )
}
