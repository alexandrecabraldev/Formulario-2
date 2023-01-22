import styled from "styled-components";

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    label{
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.5rem;
        color: ${props=>props.theme.textLabelForm};
    }

    input[type="text"], select{
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