import { Header } from "./componensts/Header";
import { Form } from "./componensts/Form";

export function App() {

  return (
    <>
      <Header 
        titleHeader="Crie e compartilhe seu evento." 
        subtitleHeader="O primeiro passo, é preencher esse formulário de inscrição."
      />
      
      <Form/>
    </>
  )
}

