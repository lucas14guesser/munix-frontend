import styled from "styled-components";

export const FormularioPesquisa = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #E6E6E6;
    padding: 2rem;
    gap: 2rem;
    margin: 5rem 0 0 2rem;
`
export const Subtitle = styled.h4`
    font-size: 1.3rem;
    color: #5B5863;
`
export const DivInputPesquisa = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`
export const InputPesquisa = styled.input`
    width: 30rem;
    padding: 1rem;
    border: 1px solid #E6E6E6;
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
export const SelectPesquisa = styled.select`
    width: 32rem;
    padding: 1rem;
    border: 1px solid #E6E6E6;
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
export const DivBtnPesquisa = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`
export const BtnPesquisa = styled.button`
    width: 15rem;
    padding: 1rem;
    background-color: #7E6DA3;
    color: #FFF;
    border: 1px solid #7E6DA3;
    border-radius: 12px;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: .3s ease-in;

    &:hover {
        background-color: #3C2A63;
    }
`
export const DivTablePesquisa = styled.div`
    display: flex;
    width: 60%;
    margin: 4rem 25rem;

    table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        background-color: #FFFFFF;
        color: #895FE3;
    }

    thead {
        background: #895FE3;
        color: #FFFFFF;
    }

    th, td {
        padding: 12px 15px;
        text-align: center;
    }

    th {
        text-transform: uppercase;
        font-size: 1.2rem;
    }

    td {
        color: #5B5863;
        border: 1px solid #E6E6E6;
        font-size: 1rem;
    }
`