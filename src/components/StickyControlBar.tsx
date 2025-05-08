// StickyControlBar.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, Form, FormGroup, Label, Input } from "reactstrap";

export type FilterSet = {
    train: string;
    sensors?: string[];
    window: string;
    autoRefresh: boolean;
    interval: number;
};

export interface StickyControlBarProps {
    trains?: { id: string; name: string }[];
    sensorOptions?: string[];
    onFiltersChange?: (filters: FilterSet) => void;
}

const StickyControlBar: React.FC<StickyControlBarProps> = ({
    trains = [],
    onFiltersChange = () => {},
}) => {
    const [train, setTrain] = useState<string>("");
    const [timeWindow, setTimeWindow] = useState<string>("1m");
    const [autoRefresh, setAutoRefresh] = useState<boolean>(true);
    const [refreshInterval, setRefreshInterval] = useState<number>(5);

    useEffect(() => {
        onFiltersChange({
            train,
            window: timeWindow,
            autoRefresh,
            interval: refreshInterval,
        });
    }, [train, timeWindow, autoRefresh, refreshInterval, onFiltersChange]);

    return (
        <Navbar
            color="light"
            light
            expand="md"
            className="sticky-top bg-white border-bottom px-3"
        >
            <NavbarBrand href="/">NGPS Dashboard</NavbarBrand>
            <Form inline className="ml-auto align-items-center">
                <FormGroup className="mr-3">
                    <Label for="trainSelect" className="mr-2 mb-0">
                        Train:
                    </Label>
                    <Input
                        id="trainSelect"
                        type="select"
                        value={train}
                        onChange={(e) => setTrain(e.target.value)}
                    >
                        <option value="">All</option>
                        {trains.map((t) => (
                            <option key={t.id} value={t.id}>
                                {t.name}
                            </option>
                        ))}
                    </Input>
                </FormGroup>
                <FormGroup className="mr-3">
                    <Label for="timeWindow" className="mr-2 mb-0">
                        Window:
                    </Label>
                    <Input
                        id="timeWindow"
                        type="select"
                        value={timeWindow}
                        onChange={(e) => setTimeWindow(e.target.value)}
                    >
                        <option value="1m">1m</option>
                        <option value="5m">5m</option>
                        <option value="15m">15m</option>
                        <option value="custom">Custom</option>
                    </Input>
                </FormGroup>
                <FormGroup className="mr-3 d-flex align-items-center">
                    <Label for="autoRefresh" className="mr-2 mb-0">
                        Auto:
                    </Label>
                    <Input
                        type="switch"
                        id="autoRefresh"
                        checked={autoRefresh}
                        onChange={(e: {
                            target: {
                                checked:
                                    | boolean
                                    | ((prevState: boolean) => boolean);
                            };
                        }) => setAutoRefresh(e.target.checked)}
                    />
                </FormGroup>
                {autoRefresh && (
                    <FormGroup className="mr-3 d-flex align-items-center">
                        <Label for="interval" className="mr-2 mb-0">
                            Interval:
                        </Label>
                        <Input
                            id="interval"
                            type="number"
                            min={1}
                            value={refreshInterval}
                            onChange={(e) =>
                                setRefreshInterval(+e.target.value)
                            }
                            style={{ width: 60 }}
                        />
                        <span className="ml-1">s</span>
                    </FormGroup>
                )}
            </Form>
        </Navbar>
    );
};

export default StickyControlBar;
