import styled from "styled-components";
import { ContainerInputs } from "./Default/ContainerInputs";
import { InputSection } from "./InputSection";


const ContainerHour = styled(ContainerInputs)`
    display: grid;
    grid-template-columns: repeat(2, 48.4%);
    gap: 3.2%;
    margin-bottom:0;

`;

const ContainerDate = styled(ContainerHour)`

    @media (max-width: 450px) {
        grid-template-columns: repeat(1, 100%);
        gap:0;
    }
`;


interface PropsType{
    titleLabel:string;
}

export function Date(props:PropsType){
    return(
        <ContainerDate>
            <InputSection titleLabel="Data"/>

            <ContainerHour>
                <InputSection titleLabel="Das"/>
                <InputSection titleLabel="Até"/>
            </ContainerHour>
        </ContainerDate>
    );
}