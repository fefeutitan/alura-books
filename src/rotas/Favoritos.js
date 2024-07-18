import '../componentes/Header'
import Pesquisa from '../componentes/Pesquisa';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002f52 35%,#326589 100%);

`

function Favoritos() {
  return (
    <AppContainer>      
      <Pesquisa/>
    </AppContainer>
  );
}

export default Favoritos;
