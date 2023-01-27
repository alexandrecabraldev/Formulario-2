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
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background-color: white;
    cursor: pointer;
`;

const Checked = styled(Checkbox.Indicator)`
    color: purple;
    
`;

interface PropsType{
    titleLabel:string;
}

export function CheckedArea(props: PropsType){

    return(
        <ContainerCheckedArea>
            {/* <input type="checkbox" name="" id="" title="checkBox"/> */}
            <CheckboxButton >
                <Checked>
                    <CheckIcon/>
                </Checked>
            </CheckboxButton>

            <label htmlFor="">{props.titleLabel}</label>
        </ContainerCheckedArea>
    );
}