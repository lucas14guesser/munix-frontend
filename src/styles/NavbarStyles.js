import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem  4rem;
    background-color: #895FE3;
    color: #FFF;
`
export const LinkLogoNav = styled(Link)`
    text-decoration: none;
    width: 6rem;
    color: #FFF;
`
export const LogoNav = styled.img`
    width: 6rem;
    border-radius: 50%;
`
export const UListaNav = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
`
export const LinkItemNav = styled(Link)`
    text-decoration: none;
    color: #FFF;
    text-transform: uppercase;
    font-size: 1rem;
`
export const BtnLogout = styled.button`
    background-color: #895FE3;
    color: #FFF;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    font-size: 1rem;
`