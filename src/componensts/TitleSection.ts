import styled from "styled-components";

export const TitleSection = styled.h1`
    
        color: ${props=>props.theme.textTitleForm};
        font-size: 1.5rem;
        font-family: 'Archivo', sans-serif;
        font-weight: 600;
        line-height: 2.125rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid ${props=>props.theme.border};
        margin-bottom: 1.5rem;
`;

export const FieldsetDefault = styled.fieldset`
    border: none;
    min-width: 19rem;
    padding: 0 4rem 1.5rem;
`;

export const Fieldset = styled(FieldsetDefault)`
    padding: 4rem 4rem 1.5rem;
    
`;

export const FieldsetEnd = styled(FieldsetDefault)`
    padding: 0rem 4rem 2.5rem;
`;

