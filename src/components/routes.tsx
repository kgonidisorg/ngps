import NGPSDashboard from "@/views/dashboard";
import Sensors from "@/views/sensors";
import IntegrationSupportPage from "@/views/support";
import React from "react";

export interface NgRoute {
    path: string;
    name: string;
    icon: string;
}

export const routes: NgRoute[] = [
    {
        path: "/",
        name: "Home",
        icon: "nc-icon nc-map-big",
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "nc-icon nc-chart-bar-32",
    },
    {
        path: "/sensors",
        name: "Sensors",
        icon: "nc-icon nc-compass-05",
    },
    {
        path: "support",
        name: "Support",
        icon: "nc-icon nc-alert-circle-i",
    },
];

export const routeComponents: {
    [key: string]: React.ReactNode;
} = {
    dashboard: <NGPSDashboard />,
    sensors: <Sensors />,
    support: <IntegrationSupportPage />,
};
