import styled from "styled-components";
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
    return(
        <Formy>
            <EventInformation titleSectionProps="Informações do Evento" />
            <Privacy/>
        </Formy>
    );
}