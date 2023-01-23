import styled from "styled-components";
import { ContainerInputs } from "./Default/ContainerInputs";

const ContainerCheckedArea = styled(ContainerInputs)`
    display: flex;
    flex-direction: row;
    align-items:center;
    gap: 1rem;
      
`;

interface PropsType{
    titleLabel:string;
}

export function CheckedArea(props: PropsType){
    return(
        <ContainerCheckedArea>
            <input type="checkbox" name="" id="" title="checkBox"/>
            <label htmlFor="">{props.titleLabel}</label>
        </ContainerCheckedArea>
    );
}