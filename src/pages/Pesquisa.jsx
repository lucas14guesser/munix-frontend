import React from 'react'
import Bar from '../components/layout/Bar'
import { IoMdTrash } from "react-icons/io";
import { BtnEditPesquisa, DivTable, LinkPesquisa, THAcao } from '../styles/DashboardStyles';
import { ContainerPesquisa } from '../styles/PesquisaStyles';
import { BtnPesquisa, DivBtnPesquisa } from '../styles/NovaPesquisaStyles';


function Pesquisa() {
  return (
    <div>
        <title>Pesquisa</title>
        <Bar titles={['PESQUISAS REALIZADAS']}/>

        <ContainerPesquisa>

            <DivTable>
                <table>
                    <thead>
                        <tr>
                            <th>Identificador</th>
                            <th>Data de envio</th>
                            <THAcao>Ação</THAcao>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Teste</td>
                            <td>Teste</td>
                            <td>
                                <BtnEditPesquisa>
                                    <IoMdTrash />
                                </BtnEditPesquisa>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </DivTable>

            <DivBtnPesquisa style={{marginLeft: '40rem'}}>
                <LinkPesquisa to='/mapeamento'>Voltar</LinkPesquisa>
                <BtnPesquisa>Exportar Excel</BtnPesquisa>
                <BtnPesquisa>Exportar CSV</BtnPesquisa>
                <BtnPesquisa>Exportar PDF</BtnPesquisa>
            </DivBtnPesquisa>

        </ContainerPesquisa>
    </div>
  )
}

export default Pesquisa