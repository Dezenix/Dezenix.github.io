import RouterRoutes from '@/app/router'
import DefaultTheme from '@/app/themes/default'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

export default function App() {
    return (
        <ThemeProvider theme={DefaultTheme}>
            <AppContainer>
                <RouterRoutes />
            </AppContainer>
        </ThemeProvider>
    )
}

const AppContainer = styled.div`
    background: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.text.primary};
`
