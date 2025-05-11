import React from 'react'
import Bar from '../components/layout/Bar'
import { ContainerMap, DivFiltro, LabelFiltro } from '../styles/MapeamentoStyles'
import { BtnPesquisa, DivBtnPesquisa, Subtitle } from '../styles/NovaPesquisaStyles'
import { TitleBar } from '../styles/layout/BarStyles'
import { LinkPesquisa } from '../styles/DashboardStyles'

function Mapeamento() {
    return (
        <div>
            <title>Mapeamento</title>
            <Bar titles={['MAPEAMENTO']} />

            <ContainerMap>

                <div>
                    {/* Aqui dentro do script deverá vir um mapa da região que a pesquisa foi realizada */}
                    <script>{/*Mapa aqui*/}</script>
                    <TitleBar style={{color: '#5B5863', border: '1px solid red', padding: '1rem'}}>AQUI DEVERÁ FICAR O SCRIPT DO MAPA DA REGIÃO!!!</TitleBar>
                </div>

                <DivFiltro>
                    <Subtitle>Filtro de perguntas</Subtitle>

                    <div>
                        <input type="checkbox" name="all" id="all" />
                        <LabelFiltro htmlFor="all">Selecionar todos</LabelFiltro>
                    </div>

                    <div>
                        <input type="checkbox" name="capacidade" id="capacidade" />
                        <LabelFiltro htmlFor="capacidade">Qual é a capacidade de ventiladores mecânicos disponíveis na UTI para pacientes críticos?</LabelFiltro>
                    </div>
                    <div>
                        <input type="checkbox" name="equipamentos" id="equipamentos" />
                        <LabelFiltro htmlFor="equipamentos">Quantos equipamentos de monitoramento de sinais vitais estão em uso nas salas de emergência?</LabelFiltro>
                    </div>
                    <div>
                        <input type="checkbox" name="leitos" id="leitos" />
                        <LabelFiltro htmlFor="leitos">Quantos leitos estão funcionando?</LabelFiltro>
                    </div>

                </DivFiltro>

                <DivBtnPesquisa style={{margin: '2rem 0 0 40rem'}}>
                    <LinkPesquisa to='#'>Voltar</LinkPesquisa>
                    <LinkPesquisa to='/visualizar-pesquisa'>Visualizar pesquisa</LinkPesquisa>
                    <BtnPesquisa>Gerar gráficos</BtnPesquisa>
                    <BtnPesquisa>Concluir pesquisa</BtnPesquisa>
                </DivBtnPesquisa>

            </ContainerMap>
        </div>
    )
}

export default Mapeamento