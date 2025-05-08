"use client";
import React, { useMemo } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupText,
    Input,
} from "reactstrap";

import { routes } from "@/components/routes";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [color, setColor] = React.useState("transparent");
    const sidebarToggle = React.useRef<HTMLButtonElement | null>(null);
    const path = usePathname();
    const toggle = () => {
        if (isOpen) {
            setColor("transparent");
        } else {
            setColor("dark");
        }
        setIsOpen(!isOpen);
    };
    const dropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const title = useMemo(() => {
        if (path === "/") {
            return "Home";
        }
        for (const route of routes) {
            if (route.path === "/") {
                continue;
            }
            if (path.indexOf(route.path) !== -1) {
                return route.name;
            }
        }
        return "Default Brand";
    }, [path]);

    const openSidebar = () => {
        document.documentElement.classList.toggle("nav-open");
        sidebarToggle.current?.classList.toggle("toggled");
    };
    // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
    const updateColor = React.useCallback(() => {
        if (window.innerWidth < 993 && isOpen) {
            setColor("dark");
        } else {
            setColor("transparent");
        }
    }, [isOpen]);

    React.useEffect(() => {
        window.addEventListener("resize", updateColor);
        return () => {
            window.removeEventListener("resize", updateColor);
        };
    }, [updateColor]);

    React.useEffect(() => {
        if (
            window.innerWidth < 993 &&
            document.documentElement.className.indexOf("nav-open") !== -1
        ) {
            document.documentElement.classList.toggle("nav-open");
            sidebarToggle.current?.classList.toggle("toggled");
        }
    }, [path, sidebarToggle]);

    return (
        // add or remove classes depending if we are on full-screen-maps page or not
        <Navbar
            color={path.indexOf("full-screen-maps") !== -1 ? "dark" : color}
            expand="lg"
            className={
                path.indexOf("full-screen-maps") !== -1
                    ? "navbar-absolute fixed-top"
                    : "navbar-absolute fixed-top " +
                      (color === "transparent" ? "navbar-transparent " : "")
            }
        >
            <div className="navbar-wrapper">
                <div className="navbar-toggle">
                    <button
                        type="button"
                        ref={sidebarToggle}
                        className="navbar-toggler"
                        onClick={() => openSidebar()}
                    >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <NavbarBrand href="/">{title}</NavbarBrand>
            </div>
            <NavbarToggler onClick={toggle}>
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar className="justify-content-end">
                <form>
                    <InputGroup className="no-border">
                        <Input placeholder="Search..." />
                        <div className="input-group-append">
                            <InputGroupText>
                                <i className="nc-icon nc-zoom-split" />
                            </InputGroupText>
                        </div>
                    </InputGroup>
                </form>
                <Nav navbar>
                    <NavItem>
                        <Link href="#pablo" className="nav-link btn-magnify">
                            <i className="nc-icon nc-layout-11" />
                            <p>
                                <span className="d-lg-none d-md-block">
                                    Stats
                                </span>
                            </p>
                        </Link>
                    </NavItem>
                    <Dropdown
                        nav
                        isOpen={dropdownOpen}
                        toggle={() => dropdownToggle()}
                    >
                        <DropdownToggle caret nav>
                            <i className="nc-icon nc-bell-55" />
                            <p>
                                <span className="d-lg-none d-md-block">
                                    Some Actions
                                </span>
                            </p>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem tag="a">Action</DropdownItem>
                            <DropdownItem tag="a">Another Action</DropdownItem>
                            <DropdownItem tag="a">
                                Something else here
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <Link href="#pablo" className="nav-link btn-rotate">
                            <i className="nc-icon nc-settings-gear-65" />
                            <p>
                                <span className="d-lg-none d-md-block">
                                    Account
                                </span>
                            </p>
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;
