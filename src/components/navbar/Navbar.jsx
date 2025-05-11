import React from 'react'
import { BtnLogout, LinkItemNav, LinkLogoNav, LogoNav, Nav, UListaNav } from '../../styles/NavbarStyles'

function Navbar() {

  return (
    /// Haverão 4 tipos de Navbar... Fazer 3 condições com a role designada na base de dados para cada uma. Sendo sem usuário, Administrador, Coordenador e Pesquisador ou usuário comum.
    <Nav>
        <LinkLogoNav to="/">
            <LogoNav src="#" alt="logo" />
        </LinkLogoNav>

        <UListaNav>
            <li>
                <LinkItemNav to="/">Home</LinkItemNav>
            </li>
            <li>
                <LinkItemNav to="/entrar">Entrar</LinkItemNav>
            </li>
        </UListaNav>

        <BtnLogout>Sair</BtnLogout>
    </Nav>
  )
}

export default Navbar