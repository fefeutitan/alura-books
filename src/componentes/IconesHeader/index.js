import styled from 'styled-components'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const Icone = styled.li`
    margin-right: 40 px;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 5 px;
    min-width: 60px;
`
const Icones = styled.ul`
    display: flex;
    align-items: center;
`
const icones = [perfil,sacola]

function IconesHeader() {
    return (
        <Icones>
            { icones.map( (icone,index) => (
              <Icone key={index}><img src={icone} alt='icone'></img></Icone>
            ) ) }
        </Icones>
    )
}

export default IconesHeader