import { InputSection } from "./InputSection";
import { TitleSection, FieldsetDefault } from "./TitleSection";

interface TypeTitleProps{
    titleSectionProps:string;
}

export function Privacy(props:TypeTitleProps){
    return(
        <FieldsetDefault>
            <TitleSection>{props.titleSectionProps}</TitleSection>

            <InputSection 
                titleLabel="E-mail do administrador"
                titleSpan="(digite um email válido)"
            />

            <InputSection 
                titleLabel="Senha de acesso para os participantes" 
                titleSpan="(mínimo 8 caracteres)"
            />
        </FieldsetDefault>
    );
}