import styled from "styled-components"


const HeaderContainer = styled.header`
  max-width: 90rem;
  position: relative;
  margin: auto;
  //background-color: ${props=>props.theme.backgroundHeader}; 

    &::before{
    content: "";
    width: 100%;
    height: 23rem;
    position: absolute;
    z-index: -1;
    top:0;
    left:0; 
    background-color: ${props=>props.theme.backgroundHeader};
    //border-radius:10px 10px 0 0;
  }  
  
  h1{
    padding: 5rem 0 1.5rem;
    font-size: 2.25rem;
    color: ${props=>props.theme.white};
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
  }

  h2{
    font-size: 1rem;
    line-height: 1.625rem;
    padding-bottom: 2.625rem;
    color: ${props=>props.theme.colorHeader};
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`;

const ContainerText = styled.div`

  margin: auto;
  max-width: 46rem;
  text-align: left;

  div{
    max-width: 19.9375rem;
    //border: 1px solid black;
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

