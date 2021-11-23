import React from 'react'
import styled from 'styled-components'
import '../styles/app.css'

export default function App() {
    return (
        <div>
            <Box>Hello</Box>
        </div>
    )
}

const Box = styled.div`
    background: #000000;
    border-radius: 16px;
    width: 100px;
    height: 100px;
    padding: 50px;
    text-align: center;
`
