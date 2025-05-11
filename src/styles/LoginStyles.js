import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    gap: 2rem;
    background-color: #895FE3;
    padding: 2rem;
    border: 1px solid #E6E6E6;
    border-radius: 24px;
    margin: 5rem 0 0 0;
`
export const DivLogo = styled.div`
    padding: 4rem 5rem;
    background-color: #5B3F96;
    color: #FFF;
`
export const LogoLogin = styled.img`
    width: 10rem;
`
export const DivInpt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.3rem;
`
export const InptLogin = styled.input`
    width: 20rem;
    padding: 1rem;
    border: 1px solid #895FE3;
    border-radius: 16px;
    outline: none;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    color: #5B5863;

    &::placeholder {
        color: #5B5863;
        font-size: 1rem;
        opacity: 75%;
        font-family: "Roboto", sans-serif;
    }
`
export const BtnLogin = styled.button`
    width: 10rem;
    padding: 1rem;
    background-color: #5B3F96;
    color: #FFF;
    border: 1px solid #895FE3;
    border-radius: 12px;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: .3s ease-in;

    &:hover {
        background-color: #3C2A63;
    }
`