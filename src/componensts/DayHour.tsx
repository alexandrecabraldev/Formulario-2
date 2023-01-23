import { Date } from "./Date";
import { TitleSection, FieldsetEnd } from "./TitleSection";

interface PropsType{
    titleSectionProps:string;
}

export function DayHour(props:PropsType){
    return(
        <FieldsetEnd>
            <TitleSection>{props.titleSectionProps}</TitleSection>
            <Date titleLabel="Senha de acesso para os participantes"/>
        </FieldsetEnd>
        
    );
}