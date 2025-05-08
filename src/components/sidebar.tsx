"use client";
/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useCallback } from "react";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NgRoute } from "./routes";
import NGPSIcon from "./logo";

let ps: PerfectScrollbar | undefined;

export interface SidebarProps {
    bgColor?: string;
    activeColor?: string;
    routes: NgRoute[];
}

function Sidebar({ bgColor, activeColor, routes }: SidebarProps) {
    bgColor = bgColor || "black";
    activeColor = activeColor || "info";
    const path = usePathname();
    const sidebar = useRef(null);
    // verifies if routeName is the one active (in browser input)
    const activeRoute = useCallback((routeName: string) => {
        // if path is home route
        console.log("path", path);
        if (path === "/") {
            return routeName === "/" ? "active" : "";
        } else if (routeName === "/") {
            return "";
        }
        return path.indexOf(routeName) > -1 ? "active" : "";
    }, [path]);

    useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            if (sidebar.current) {
                ps = new PerfectScrollbar(sidebar.current, {
                    suppressScrollX: true,
                    suppressScrollY: false,
                });
            }
        }
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                if (ps !== undefined) {
                    ps.destroy();
                }
            }
        };
    });
    return (
        <div
            className="sidebar"
            data-color={bgColor}
            data-active-color={activeColor}
        >
            <div className="logo">
                <a
                    href="#"
                    className="simple-text logo-mini"
                >
                    <div className="logo-img">
                        <NGPSIcon
                            size={34}
                            color="#51bcda"
                            className="w-full"
                             />
                    </div>
                </a>
                <a
                    href="#"
                    className="simple-text logo-normal"
                >
                    NextGen
                </a>
            </div>
            <div className="sidebar-wrapper" ref={sidebar}>
                <Nav>
                    {routes.map((prop, key) => {
                        return (
                            <li className={activeRoute(prop.path)} key={key}>
                                <Link href={prop.path} className="nav-Link">
                                    <i className={prop.icon} />
                                    <p>{prop.name}</p>
                                </Link>
                            </li>
                        );
                    })}
                </Nav>
            </div>
        </div>
    );
}

export default Sidebar;
