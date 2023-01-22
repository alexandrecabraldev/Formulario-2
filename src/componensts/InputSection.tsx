import styled from "styled-components"
import { ContainerInputs } from "./Default/ContainerInputs";

const ContainerTitle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    align-items: center;

    span{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.25rem;
        color: ${props=>props.theme.textPlaceholder};
    }
`;

interface InformationProps{
    titleLabel:string;
    titleSpan?:string;
}

export function InputSection(props:InformationProps){
    return(
        <ContainerInputs>
            <ContainerTitle>
                <label>{props.titleLabel}</label>
                <span>{props.titleSpan}</span>
            </ContainerTitle>
                    
            <input type="text" title="inputText"/>
        </ContainerInputs>
    );
}