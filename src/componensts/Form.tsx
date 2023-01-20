import styled from "styled-components";

const Fieldset = styled.fieldset`
    padding: 4rem;
    background-color: ${props=>props.theme.backgroundForm};
    max-width: 46rem;
    min-width: 19rem;
    margin: auto;

    border-radius: 8px 8px 0 0;
    border: none;
    
`;

const TitleSection = styled.h2`

        display: block;
        color: ${props=>props.theme.textTitleForm};
        font-size: 1.5rem;
        font-family: 'Archivo', sans-serif;
        font-weight: 600;
        line-height: 2.125rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid ${props=>props.theme.border};
        margin-bottom: 1.5rem;
`;

const ContainerLabelTitle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    align-items: center;

    span{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.25rem;
        color: ${props=>props.theme.textPlaceholder};
    }
`;

const ContainerInputLabel = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    label{
            
        font-family: 'Poppins',sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.5rem;
    }

    input[type="text"]{
        height: 3.5rem;
        background-color: ${props=>props.theme.backgroundForm};
        border: 1px solid ${props=>props.theme.border};
        border-radius: 8px;
        padding: 10px;
        font-size: 1rem;
           
        &:focus{
            outline:1px solid ${props=>props.theme.focus};
        }
    }

    textarea{
        border-radius: 8px;
        border: 1px solid ${props=>props.theme.border};
        background-color: ${props=>props.theme.backgroundForm};
        padding: 10px;
        font-size: 1rem;

        &:focus{
            outline:1px solid ${props=>props.theme.focus};
        }
    }
`;

export function Form(){
    return(
        <Fieldset>
            <TitleSection>Informações do Evento</TitleSection>
            <ContainerInputLabel>
                <ContainerLabelTitle>
                    <label>Título do evento</label>
                    <span>(mínimo 8 caracteres)</span>
                </ContainerLabelTitle>
                
                <input type="text" title="inputText"/>
            </ContainerInputLabel>

            <ContainerInputLabel>
                <label>Link do evento</label>
                <input type="text" title="inputText"/>
            </ContainerInputLabel>

            <ContainerInputLabel>
                <label>Whatsapp para contato</label>
                <input type="text" title="inputText"/>
            </ContainerInputLabel>

            <ContainerInputLabel>
                <label>Informações  extras</label>
                <textarea name="textarea" id="" cols={30} rows={10} title="textArea"></textarea>
            </ContainerInputLabel>
        </Fieldset>
    );
}