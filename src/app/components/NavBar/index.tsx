import DezenixLogo from '@/assets/images/logo.png'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'
import styled from 'styled-components'

export default function Navbar() {
    return (
        <div>
            <NavbarContainer>
                <HeightAppBar position="static">
                    <HeightToolbar>
                        <HeightIconButton
                            disabled
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <HeightImg src={DezenixLogo} alt="logo" />
                        </HeightIconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Dezenix
                        </Typography>
                        <Button color="inherit">Button here</Button>
                    </HeightToolbar>
                </HeightAppBar>
            </NavbarContainer>
        </div>
    )
}

const NavbarContainer = styled(Box)`
    height: 70px;
`

const HeightAppBar = styled(AppBar)`
    height: 100% !important;
`

const HeightToolbar = styled(Toolbar)`
    height: 100% !important;
`

const HeightIconButton = styled(IconButton)`
    height: 100% !important;
`

const HeightImg = styled.img`
    height: 100% !important;
    border-radius: 26px;
`
