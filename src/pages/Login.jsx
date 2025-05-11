import React from 'react'
import { BtnLogin, ContainerLogin, DivInpt, DivLogo, FormLogin, InptLogin, LogoLogin } from '../styles/LoginStyles'
import Bar from '../components/layout/Bar'

function Login() {
    return (
        <div>
            <title>Entrar</title>
            <Bar titles={['ÁREA DE LOGIN']} />
            <ContainerLogin>

                <FormLogin>

                    <DivLogo>
                        <LogoLogin src="#" alt="logo" />
                    </DivLogo>

                    <DivInpt>
                        <InptLogin type="text" required placeholder='Usuário' />
                        <InptLogin type="password" required placeholder='Senha' />
                    </DivInpt>
                    <div>
                        <BtnLogin>Entrar</BtnLogin>
                    </div>

                </FormLogin>

            </ContainerLogin>
        </div>
    )
}

export default Login