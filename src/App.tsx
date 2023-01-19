import styled from "styled-components"


const HeaderContainer = styled.header`
  max-width: 90rem;
  margin: auto;
  border: 1px solid black;
  
  h1{
    margin: 5rem 0 1.5rem;
  }

  h2{
    margin-bottom: 2.625rem;
  }
`;

const ContainerText = styled.div`
  border:1px solid black;
  margin: auto;
  max-width: 46rem;
  text-align: left;

  div{
    max-width: 19.9375rem;
    border: 1px solid black;
  }
`;

export function App() {

  return (
    <HeaderContainer>
      <ContainerText>
        <div>
          <h1>Crie e compartilhe seu evento.</h1>
          <h2>O primeiro passo, é preencher esse formulário de inscrição.</h2>
        </div>
      </ContainerText>
    </HeaderContainer>
  )
}

