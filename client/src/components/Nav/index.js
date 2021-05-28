import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse,
    Container,
    Row,
    Col
} from "reactstrap"


function Navigation() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
        <Container style={{marginLeft: "0", marginRight: "0", display: "flex"}}>
            <Row>
                <Col xs="1">
                    <Navbar style={{color: "black"}} light>
                        <NavbarToggler onClick={toggleNavbar} />
                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink>
                                        Home
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Col>
                <Col xs="11" style={{display: "flex"}}>
                    <h1 style={{margin: "auto 30px"}}>
                        HABIT TRACKER
                    </h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Navigation;