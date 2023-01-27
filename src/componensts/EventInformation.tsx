import styled from "styled-components";
import { InputSection } from "./InputSection";
import { InputTextArea } from "./InputTextArea";
import { SelectComponent } from "./SelectComponent";
import { TitleSection, Fieldset } from "./TitleSection";

interface TypeProps{
    titleSectionProps:String;
}

export function EventInformation(props:TypeProps){
    return (
        
        <Fieldset>
            <TitleSection>{props.titleSectionProps}</TitleSection>
                    
                <InputSection 
                    titleLabel="Título do evento" 
                    titleSpan="(mínimo 8 caracteres)"
                    name="Título do evento"
                />

                <InputSection 
                    titleLabel="Link do evento" 
                    titleSpan="(comece com https://)"
                    name="Link do evento"
                />

                <InputSection 
                    titleLabel="Whatsapp para contato" 
                    titleSpan="(somente números)"
                    name="Whatsapp para contato"
                />

                <InputTextArea titleLabel="Informações extras"/>

                <SelectComponent titleLabel="Categoria"/>

        </Fieldset>

    );
}