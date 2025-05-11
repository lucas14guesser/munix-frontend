import React, { useState } from 'react'
import Bar from '../components/layout/Bar'
import { BtnPesquisa, DivBtnPesquisa, DivInputPesquisa, DivTablePesquisa, FormularioPesquisa, InputPesquisa, SelectPesquisa, Subtitle } from '../styles/NovaPesquisaStyles'
import { IoMdTrash } from "react-icons/io";
import { BtnEditPesquisa, THAcao } from '../styles/DashboardStyles';
import ModalSuccess from '../components/layout/modals/ModalSuccess';
import { IoMdCheckmarkCircle } from "react-icons/io";
import { BtnClose, IconCheck, ModalContent, ModalInternalContainer, ModalOverlay, TextCadSuc } from '../styles/layout/modals/Modals';

function NovaPesquisa() {
    const [modalSuccess, setModalSuccess] = useState(false);

    const handleCloseModalSuccess = () => {
        setModalSuccess(false)
    }

    return (
        <div>
            <title>Cadastrar Pesquisa</title>
            <Bar titles={['CADASTRAR PESQUISA']} />

            <FormularioPesquisa>
                <Subtitle>Formulário</Subtitle>

                <DivInputPesquisa>
                    <InputPesquisa type="text" placeholder='Título' required />
                    <InputPesquisa type="text" placeholder='Subtítulo' required />
                    <InputPesquisa type="text" placeholder='Limite de fotos' required />
                    <InputPesquisa type="text" placeholder='Limite de questões' required />
                    <InputPesquisa type="text" placeholder='Meta' required />
                    <SelectPesquisa name="coordenador" id="coordenador" required>
                        <option value="coordenador">Atribuir coordenador</option>
                    </SelectPesquisa>
                </DivInputPesquisa>

                <DivBtnPesquisa>
                    <BtnPesquisa>Limpar formulário</BtnPesquisa>
                    <BtnPesquisa>Cadastrar pesquisa</BtnPesquisa>
                </DivBtnPesquisa>

            </FormularioPesquisa>

            <DivTablePesquisa>
                <table>
                    <thead>
                        <tr>
                            <th>Login</th>
                            <th>E-mail</th>
                            <THAcao>Ação</THAcao>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Coordenador</td>
                            <td>coordenador@munix.com.br</td>
                            <td>
                                <BtnEditPesquisa>
                                    <IoMdTrash />
                                </BtnEditPesquisa>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </DivTablePesquisa>

            {modalSuccess && (
                <ModalSuccess>
                    <ModalOverlay>
                        <ModalContent>
                            <ModalInternalContainer>

                                <div>
                                    <IconCheck>
                                        <IoMdCheckmarkCircle />
                                    </IconCheck>
                                </div>

                                <div>
                                    <TextCadSuc>Cadastro efetuado com sucesso!</TextCadSuc>
                                </div>

                                <div>
                                    <BtnClose onClick={handleCloseModalSuccess}>OK</BtnClose>
                                </div>

                            </ModalInternalContainer>
                        </ModalContent>
                    </ModalOverlay>
                </ModalSuccess>
            )}

        </div>
    )
}

export default NovaPesquisa