import { InputSection } from "./InputSection";
import { TitleSection, FieldsetDefault } from "./TitleSection";

export function Privacy(){
    return(
        <FieldsetDefault>
            <TitleSection>qualqeur coisa</TitleSection>

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