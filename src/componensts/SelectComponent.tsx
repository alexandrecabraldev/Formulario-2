import styled from "styled-components";
import { ContainerInputs } from "./Default/ContainerInputs";

const ContainerSelect = styled(ContainerInputs)`

    select{
        color: ${props=>props.theme.textPlaceholder};

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

            <select name="" id="" title="select">
                <option value="placeholder" selected hidden disabled>Tipo do Evento</option>
                <option value="value One">Value One</option>
                <option value="value two">Value two</option>
                <option value="value three">Value three</option>
                <option value="value four">Value four</option>
            </select>
        </ContainerSelect>
    );
}