import styled from "styled-components";
import { FieldsetDefault } from "./TitleSection";

export const FieldsetButton = styled(FieldsetDefault)`
    padding: 2.5rem 4rem;
    display: flex;
    justify-content: center;
    background-color:${props=>props.theme.backgroundFooter};

    button{
        width: 100%;
        background-color:${props=>props.theme.greenButton};
        color: ${props=>props.theme.white};
        font-family: "Archivo", sans-serif;
        font-weight: 600;
        font-size: 1rem;
        line-height:1.625rem;
        border: none;
        border-radius: 8px;
        padding: 1rem 0;
        cursor: pointer;
    }
`;

interface TypeButtonProps{
    titleSectionProps:string;
}

export function Button(props: TypeButtonProps){
    return (
        <FieldsetButton>
            <button type="submit">{props.titleSectionProps}</button>
        </FieldsetButton>
        
    );
}