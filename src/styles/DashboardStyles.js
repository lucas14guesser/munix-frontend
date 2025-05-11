import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerDash = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    margin: 5rem 0 0 2rem;
`
export const LinkPesquisa = styled(Link)`
    display: flex;
    background-color: #7E6DA3;
    color: #FFF;
    padding: 1.3rem;
    border: 1px solid #E6E6E6;
    border-radius: 12px;
    font-size: 1rem;
    transition: .3s ease-in;
    text-decoration: none;
    width: 10rem;
    justify-content: center;

    &:hover {
        background-color: #3C2A63;
    }
`
export const DivTable = styled.div`
    display: flex;
    width: 98%;

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
export const THAcao = styled.th`
    width: 5%;
`
export const BtnEditPesquisa = styled.button`
    border: none;
    font-size: 1.3rem;
    background-color: #FFF;
    color: #7E6DA3;
    cursor: pointer;
    transition: .3s ease-in;

    &:hover {
        color: #895FE3;
    }
`
export const BtnAddBloco = styled.button`
    width: 15rem;
    padding: 1rem;
    background-color: #7E6DA3;
    color: #FFF;
    border: 1px solid #895FE3;
    border-radius: 12px;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    margin: 2rem .5rem;
    cursor: pointer;
    transition: .3s ease-in;

    &:hover {
        background-color: #3C2A63;
    }
`
export const DivSelectBloco = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin: 2rem 0;
`
export const DivInputsAddBloco = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 6rem;
`
export const DivInputSelectAddBloco = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`
export const DivBtnCheck = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
    flex-direction: row;
    align-items: center;
`