import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import NovaPesquisa from '../pages/NovaPesquisa'
import Mapeamento from '../pages/Mapeamento'
import Pesquisa from '../pages/Pesquisa'

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/cadastrar-pesquisa' element={<NovaPesquisa />} />
            <Route path='/mapeamento' element={<Mapeamento />} />
            <Route path='/visualizar-pesquisa' element={<Pesquisa />} />
        </Routes>
    )
}

export default Router