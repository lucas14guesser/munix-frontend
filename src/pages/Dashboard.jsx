import React, { useState } from 'react'
import Bar from '../components/layout/Bar'
import { MdModeEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { BtnAddBloco, BtnEditPesquisa, ContainerDash, DivBtnCheck, DivInputsAddBloco, DivInputSelectAddBloco, DivSelectBloco, DivTable, LinkPesquisa, THAcao } from '../styles/DashboardStyles';
import { ModalContent, ModalInternalContainer, ModalOverlay } from '../styles/layout/modals/Modals';
import { BtnPesquisa, DivBtnPesquisa, InputPesquisa, SelectPesquisa, Subtitle } from '../styles/NovaPesquisaStyles';

function Dashboard() {
    const [modalEditPesquisa, setModalEditPesquisa] = useState(false);
    const [modalAddBloco, setModalAddBloco] = useState(false);

    const handleModalEditPesquisa = () => {
        setModalEditPesquisa(!modalEditPesquisa);
    }

    const handleModalAddBloco = () => {
        setModalAddBloco(!modalAddBloco);
    }

    return (
        <div>
            <title>Dashboard</title>
            <Bar titles={['DASHBOARD']} />

            <ContainerDash>

                <div>
                    <LinkPesquisa to={'/cadastrar-pesquisa'}>Nova pesquisa</LinkPesquisa>
                </div>

                <DivTable>
                    <table>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Meta</th>
                                <th>Data de criação</th>
                                <th>Conclusão</th>
                                <th>Quantidade efetuada</th>
                                <th>Status</th>
                                <THAcao>Ação</THAcao>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Secretaria de saúde</td>
                                <td>50</td>
                                <td>17/02/2025 19:48:28</td>
                                <td>0%</td>
                                <td>0</td>
                                <td>Status</td>
                                <td>
                                    <BtnEditPesquisa onClick={handleModalEditPesquisa}>
                                        <MdModeEdit />
                                    </BtnEditPesquisa>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </DivTable>

            </ContainerDash>

            {modalEditPesquisa && (
                <ModalOverlay>
                    <ModalContent style={{ backgroundColor: '#E6E6E6', padding: '0', maxWidth: '80rem' }}>
                        <Bar titles={['SECRETARIA DE SAÚDE - Hospitais']} />

                        <DivTable style={{ margin: '0 .5rem' }}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Título</th>
                                        <THAcao>Ação</THAcao>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Equipamentos</td>
                                        <td style={{ display: 'flex', gap: '.3rem' }}>
                                            <BtnEditPesquisa onClick={handleModalAddBloco}>
                                                <MdModeEdit />
                                            </BtnEditPesquisa>
                                            <BtnEditPesquisa>
                                                <IoMdTrash />
                                            </BtnEditPesquisa>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </DivTable>

                        <DivSelectBloco>
                            <SelectPesquisa name="pesquisador" id="pesquisador" style={{ margin: '0 .5rem' }}>
                                <option value="pesquisador">Atribuir pesquisador</option>
                            </SelectPesquisa>
                            <BtnAddBloco style={{ margin: '0 .5rem' }}>Atribuir</BtnAddBloco>
                        </DivSelectBloco>

                        <DivTable style={{ margin: '0 .5rem' }}>
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
                                        <td>Pesquisador</td>
                                        <td>pesquisador@munix.com.br</td>
                                        <td style={{ display: 'flex', gap: '.3rem' }}>
                                            <BtnEditPesquisa>
                                                <IoMdTrash />
                                            </BtnEditPesquisa>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </DivTable>

                        <DivBtnPesquisa style={{ margin: '2rem 1rem', justifyContent: 'flex-end' }}>
                            <BtnPesquisa onClick={handleModalEditPesquisa}>Voltar</BtnPesquisa>
                            <BtnPesquisa>Enviar para campo</BtnPesquisa>
                        </DivBtnPesquisa>
                    </ModalContent>
                </ModalOverlay>
            )}

            {modalAddBloco && (
                <modalAddBloco>
                    <ModalOverlay>
                        <ModalContent style={{backgroundColor: '#E6E6E6', maxWidth: '50rem'}}>
                            <ModalInternalContainer>
                                <Subtitle>Adicionar Bloco</Subtitle>

                                <DivInputsAddBloco>
                                    <InputPesquisa type="text" placeholder='Título' required style={{width: '35.5rem'}}/>

                                    <DivInputSelectAddBloco>
                                        <InputPesquisa type="text" placeholder='Pergunta' required/>
                                        <SelectPesquisa name="descricao" id="descricao" style={{width: '10rem'}}>
                                            <option value="descricao">Descrição</option>
                                        </SelectPesquisa>
                                    </DivInputSelectAddBloco>

                                    <DivBtnCheck>
                                        <BtnAddBloco>Remover pergunta</BtnAddBloco>
                                        <input type="checkbox" name="obrigatorio" id="obrigatorio" />
                                        <label htmlFor="obrigatorio" style={{opacity: '70%', color: '#5B5863'}}>Obrigatório</label>
                                    </DivBtnCheck>

                                    <div style={{marginLeft: '22rem'}}>
                                        <BtnAddBloco>Adicionar pergunta</BtnAddBloco>
                                    </div>

                                    <DivBtnPesquisa style={{marginRight: '20rem', gap: '.3rem'}}>
                                        <BtnAddBloco onClick={handleModalAddBloco}>Voltar</BtnAddBloco>
                                        <BtnAddBloco>Enviar</BtnAddBloco>
                                    </DivBtnPesquisa>

                                </DivInputsAddBloco>
                            </ModalInternalContainer>
                        </ModalContent>
                    </ModalOverlay>
                </modalAddBloco>
            )}
        </div>
    )
}

export default Dashboard