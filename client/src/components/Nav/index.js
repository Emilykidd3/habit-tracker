import React from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Collapse,
} from "reactstrap"


function Navigation() {
    return(
        <div>
            <Navbar>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            Home
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            HABIT TRACKER
        </div>
    )
}

export default Navigation;