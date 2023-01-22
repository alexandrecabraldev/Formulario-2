import { ContainerInputs } from "./Default/ContainerInputs";

interface TitleProps{
    titleLabel:string;
}

export function InputTextArea(props:TitleProps){
    return(
        <ContainerInputs>
            <label>{props.titleLabel}</label>
            <textarea name="textarea" id="" cols={30} rows={10} title="textArea"></textarea>
        </ContainerInputs>
    );
}