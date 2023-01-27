import styled from "styled-components";
import { Button } from "./Button";
import { DayHour } from "./DayHour";
import { EventInformation } from "./EventInformation";
import { Privacy } from "./Privacy";

const Formy = styled.form`
    
    background-color: ${props=>props.theme.backgroundForm};
    max-width: 46rem;
    min-width: 19rem;
    margin: auto;
    border-radius: 8px 8px 0 0;
`;



export function Form(){

    const input = document.querySelector("input[name='Link do evento']");
    
    console.log(input);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log("submit");
        console.log(input);

        // if(Number(input?.value.length)<8){
        //     console.log("entrou")
        // }
    }

    return(
        <Formy onSubmit={handleSubmit}>
            <EventInformation titleSectionProps="Informações do Evento" />
            <Privacy titleSectionProps="Privacidade"/>
            <DayHour titleSectionProps="Dia e hora"/>
            <Button titleSectionProps="Salvar evento"/>
        </Formy>
    );
}