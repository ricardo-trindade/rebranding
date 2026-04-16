import { StyledSpecialities } from './SpecialitiesStyles'

import { IconOne } from '../../assets/icons/icon-one.svg'
import { IconTwo } from '../../assets/icons/icon-two.svg'
import { IconThree } from '../../assets/icons/icon-three.svg'

export default function Specialities() {
    return (
        <StyledSpecialities>
            <div className="title">
                <h3>ESPECIALIDADES</h3>
                <h2>Elevando o padrão do seu produto digital</h2>
            </div>
            <div className="cards">
                <div className="card">
                    <IconOne />
                    <h3>UI Design</h3>
                    <p>Criamos interfaces visuais deslumbrantes, minimalistas e consistentes que comunicam o valor da sua marca no primeiro olhar.</p>
                </div>
                <div className="card">
                    <IconTwo />
                    <h3>UX Research</h3>
                    <p>Mergulhamos fundo nas necessidades dos seus usuários para desenhar fluxos intuitivos e eliminar atritos na jornada de uso.</p>
                </div>
                <div className="card">
                    <IconThree />
                    <h3>Design Systems</h3>
                    <p>Padronizamos componentes e regras de design para que sua equipe de desenvolvimento construa mais rápido e com zero retrabalho.</p>
                </div>
            </div>
        </StyledSpecialities>
    )
}