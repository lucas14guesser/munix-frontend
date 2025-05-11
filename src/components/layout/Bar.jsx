import React from 'react'
import { ContainerBar, TitleBar } from '../../styles/layout/BarStyles'

function Bar({ titles }) {
    return (
        <ContainerBar>
            {titles.map((title, index) => (
                <TitleBar key={index}>{title}</TitleBar>
            ))}
        </ContainerBar>
    )
}

export default Bar