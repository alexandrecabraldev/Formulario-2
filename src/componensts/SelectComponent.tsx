import styled from "styled-components";
import { ContainerInputs } from "./Default/ContainerInputs";

const ContainerSelect = styled(ContainerInputs)`

    select{
        color: ${props=>props.theme.textPlaceholder};
        appearance: none;

        background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");

        background-repeat: no-repeat;
        background-position: top 50% right 1.5rem;

        option{
            color: black;
        }
    }
`;

interface PropsTitle{
    titleLabel:string;
}

export function SelectComponent(props: PropsTitle){
    return(
        <ContainerSelect>
            <label>{props.titleLabel}</label>

            <select name="" id="" title="select" defaultValue={"placeholder"}>
                <option value="placeholder" hidden>Tipo do Evento</option>
                <option value="value One">Value One</option>
                <option value="value two">Value two</option>
                <option value="value three">Value three</option>
                <option value="value four">Value four</option>
            </select>
        </ContainerSelect>
    );
}