import logo from '@/assets/images/logo.png'
import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import styled from 'styled-components'

export default function Navbar() {
    return (
        <div>
            <NavbarContainer fluid>
                <Row className="h-100">
                    <Col className="h-100">
                        <Image className="h-100" src={logo} roundedCircle />
                    </Col>
                    <Col>Dezenix</Col>
                    <Col>Sample Navbar</Col>
                </Row>
            </NavbarContainer>
        </div>
    )
}

const NavbarContainer = styled(Container)`
    height: 70px;
    background: #eeeeee;
`
