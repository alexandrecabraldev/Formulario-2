import * as Checkbox  from "@radix-ui/react-checkbox";
import { CheckIcon } from '@radix-ui/react-icons';

import styled from "styled-components";
import { ContainerInputs } from "./Default/ContainerInputs";

const ContainerCheckedArea = styled(ContainerInputs)`
    display: flex;
    flex-direction: row;
    align-items:center;
    gap: 1rem;
      
`;

const CheckboxButton = styled(Checkbox.Root)`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 8px;
    border: 1px solid ${props=>props.theme.border};
    background-color: ${props=>props.theme.backgroundForm};
    cursor: pointer;
    
`;

const Checked = styled(Checkbox.Indicator)`

    display:flex; 
    
    width: 100%;
    height: 100%;

     &::before{
        display: flex;
        align-items: center;
        justify-content:center; 
        margin:0 auto;

        content: url("data:image/svg+xml,%3Csvg width='18' height='14' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 11.17L1.83 7L0.410004 8.41L6 14L18 2L16.59 0.589996L6 11.17Z' fill='%2342D3FF'/%3E%3C/svg%3E ");
        
        background-repeat: no-repeat;
    } 

`;

interface PropsType{
    titleLabel:string;
}

export function CheckedArea(props: PropsType){

    return(
        <ContainerCheckedArea>
            {/* <input type="checkbox" name="" id="" title="checkBox"/> */}
            <CheckboxButton>
                <Checked/>
            </CheckboxButton>

            <label htmlFor="">{props.titleLabel}</label>
        </ContainerCheckedArea>
    );
}