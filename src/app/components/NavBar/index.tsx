import React from 'react'
import styled from 'styled-components'

export default function Navbar() {
    return (
        <div>
            <NavbarContainer>
                {/* <Row className="h-100">
                    <Col className="h-100">
                        <Image className="h-100" src={logo} roundedCircle />
                    </Col>
                    <Col>Dezenix</Col>
                    <Col>Sample Navbar</Col>
                </Row> */}
            </NavbarContainer>
        </div>
    )
}

const NavbarContainer = styled.div`
    height: 70px;
    background: ${(props) => props.theme.secondary};
`
