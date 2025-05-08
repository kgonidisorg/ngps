"use client";
import {
    Radar,
    Camera,
    Locate,
    Compass,
    Signal,
    WifiOff,
    MapPin,
} from "lucide-react";
import { Card, CardBody, CardFooter, CardTitle, Col, Row } from "reactstrap";

import React, { useState, useEffect } from "react";
import { Navbar, Form, FormGroup, Label, Input } from "reactstrap";
import {
    PositionErrorChart,
    ThroughputChart,
    AnomalyDropoutWidget,
    HealthIndicatorsWidget,
} from "@/components/sensor-charts";
import {
    dummyPositionErrorChartData,
    dummyThroughputChartData,
    dummyAnomalyDropOutData,
    dummyHealthIndicatorsData,
} from "@/components/data";

interface Train {
    id: string;
    name: string;
}

interface Filters {
    train: string;
    sensors: string[];
    window: string;
    autoRefresh: boolean;
    interval: number;
}

interface StickyControlBarProps {
    trains?: Train[];
    sensorOptions?: string[];
    onFiltersChange?: (filters: Filters) => void;
}

const StickyControlBar: React.FC<StickyControlBarProps> = ({
    trains = [
        { id: "1", name: "Train 1" },
        { id: "2", name: "Train 2" },
        { id: "3", name: "Train 3" },
    ],
    sensorOptions = ["Camera", "Radar", "Lidar", "IMU", "GPS", "WiFi"],
    onFiltersChange = () => {},
}) => {
    const [selectedTrain, setSelectedTrain] = useState<string>("");
    const [sensors, setSensors] = useState<Set<string>>(new Set(sensorOptions));
    const [timeWindow, setTimeWindow] = useState<string>("1m");
    const [autoRefresh, setAutoRefresh] = useState<boolean>(true);
    const [refreshInterval, setRefreshInterval] = useState<number>(5);

    // Emit the combined filter state whenever any piece changes
    useEffect(() => {
        onFiltersChange({
            train: selectedTrain,
            sensors: Array.from(sensors),
            window: timeWindow,
            autoRefresh,
            interval: refreshInterval,
        });
    }, [
        selectedTrain,
        sensors,
        timeWindow,
        autoRefresh,
        refreshInterval,
        onFiltersChange,
    ]);

    const handleTrainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTrain(e.target.value);
    };

    const handleWindowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimeWindow(e.target.value);
    };

    const handleAutoRefreshToggle = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setAutoRefresh(e.target.checked);
    };

    const handleIntervalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRefreshInterval(Number(e.target.value));
    };

    const toggleSensor = (sensor: string) => {
        setSensors((prev) => {
            const updated = new Set(prev);
            if (updated.has(sensor)) {
                updated.delete(sensor);
            } else {
                updated.add(sensor);
            }
            return updated;
        });
    };

    return (
        <Navbar
            color="light"
            light
            expand="md"
            className="bg-[#f4f3ef] border-bottom px-3 pt-3 rounded"
        >
            <Form className="m-auto inline-flex justify-content-between">
                {/* Train Selector */}
                <FormGroup className="mr-6 inline-flex align-items-center">
                    <Label for="trainSelect" className="mr-2 mb-0">
                        Train:
                    </Label>
                    <Input
                        type="select"
                        name="train"
                        id="trainSelect"
                        value={selectedTrain}
                        onChange={handleTrainChange}
                    >
                        <option value="">All Trains</option>
                        {trains.map((t) => (
                            <option key={t.id} value={t.id}>
                                {t.name}
                            </option>
                        ))}
                    </Input>
                </FormGroup>

                {/* Sensor Checkboxes */}
                <FormGroup className="mr-10 d-flex align-items-center gap-2">
                    <Label className="mr-2 mb-0">Sensors:</Label>
                    {sensorOptions.map((name) => (
                        <div key={name} className="d-flex align-items-cente">
                            <Input
                                type="checkbox"
                                id={`sensor-${name}`}
                                label={name}
                                checked={sensors.has(name)}
                                onChange={() => toggleSensor(name)}
                            />
                            <Label for={`sensor-${name}`} className="ml-2 mb-0">
                                {name}
                            </Label>
                        </div>
                    ))}
                </FormGroup>

                {/* Time Window */}
                <FormGroup className="mr-3 inline-flex align-items-center">
                    <Label for="timeWindow" className="mr-2 mb-0">
                        Window:
                    </Label>
                    <Input
                        type="select"
                        name="window"
                        id="timeWindow"
                        value={timeWindow}
                        onChange={handleWindowChange}
                    >
                        <option value="1m">Last 1 min</option>
                        <option value="5m">Last 5 min</option>
                        <option value="15m">Last 15 min</option>
                        <option value="custom">Custom…</option>
                    </Input>
                </FormGroup>

                {/* Auto-Refresh Switch */}
                <FormGroup className="mr-3 d-flex align-items-center">
                    <Label for="autoRefresh" className="mr-2 mb-0">
                        Refresh:
                    </Label>
                    <Input
                        type="switch"
                        id="autoRefresh"
                        name="autoRefresh"
                        label=""
                        checked={autoRefresh}
                        onChange={handleAutoRefreshToggle}
                    />
                </FormGroup>

                {/* Refresh Interval */}
                {autoRefresh && (
                    <FormGroup className="mr-3 d-flex align-items-center">
                        <Label for="refreshInterval" className="mr-2 mb-0">
                            Interval:
                        </Label>
                        <Input
                            type="number"
                            name="interval"
                            id="refreshInterval"
                            value={refreshInterval}
                            min={1}
                            onChange={handleIntervalChange}
                            style={{ width: "70px" }}
                        />
                        <span className="ml-1">s</span>
                    </FormGroup>
                )}
            </Form>
        </Navbar>
    );
};

export type SensorProps = {
    label: string;
    value: string;
    icon: React.ReactNode;
    status: string;
    updated: string;
};

function statusIcon(status: string) {
    switch (status) {
        case "Online":
            return <Signal className="text-success" />;
        case "Offline":
            return <WifiOff className="text-danger" />;
        case "Delayed":
            return <Signal className="text-warning" />;
        default:
            return <Signal className="text-secondary" />;
    }
}

export function SensorCard({
    label,
    value,
    icon,
    status,
    updated,
}: SensorProps) {
    return (
        <Card className="card-stats">
            <CardBody>
                <Row>
                    <Col md="3" xs="6">
                        <div className="icon-big text-center icon-warning">
                            {icon}
                        </div>
                    </Col>
                    <Col md="9" xs="7">
                        <div className="numbers">
                            <p className="card-category">{label}</p>
                            <CardTitle tag="p">{value}</CardTitle>
                            <p />
                        </div>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter>
                <hr />
                <div className="stats d-flex align-items-center">
                    {statusIcon(status)}
                    <span className="ms-2">
                        {status} - {updated}
                    </span>
                </div>
            </CardFooter>
        </Card>
    );
}

export default function Sensors() {
    const sensorStatuses = [
        {
            label: "Camera",
            value: "Active",
            icon: (
                <Camera
                    className="text-success w-full"
                    width={64}
                    height={64}
                />
            ),
            status: "Delayed",
            updated: "5 min ago",
        },
        {
            label: "Radar",
            value: "20m/s",
            icon: (
                <Radar className="text-warning w-full" width={64} height={64} />
            ),
            status: "Online",
            updated: "1 min ago",
        },
        {
            label: "Lidar",
            value: "40.7128° N, 74.0060° W",
            icon: (
                <Locate
                    className="text-primary w-full"
                    width={64}
                    height={64}
                />
            ),
            status: "Online",
            updated: "10 min ago",
        },
        {
            label: "IMU",
            value: "5m/s²",
            icon: (
                <Compass
                    className="text-danger w-full"
                    width={64}
                    height={64}
                />
            ),
            status: "Offline",
            updated: "15 min ago",
        },
        {
            label: "GPS",
            value: "40.7128° N, 74.0060° W",
            icon: (
                <MapPin className="text-info w-full" width={64} height={64} />
            ),
            status: "Online",
            updated: "2 min ago",
        },
        {
            label: "WiFi",
            value: "Connected",
            icon: (
                <Signal
                    className="text-success w-full"
                    width={64}
                    height={64}
                />
            ),
            status: "Online",
            updated: "30 sec ago",
        },
    ];

    return (
        <div className="content overflow-y-scroll">
            <StickyControlBar onFiltersChange={(f) => console.log(f)} />
            <Row>
                <Col md="4" lg="3">
                    {sensorStatuses.map((sensor, index) => (
                        <SensorCard
                            key={index}
                            label={sensor.label}
                            value={sensor.value}
                            icon={sensor.icon}
                            status={sensor.status}
                            updated={sensor.updated}
                        />
                    ))}
                </Col>
                <Col md="8" lg="9">
                    <PositionErrorChart {...dummyPositionErrorChartData} />
                    <ThroughputChart {...dummyThroughputChartData} />
                    <AnomalyDropoutWidget {...dummyAnomalyDropOutData} />
                    <HealthIndicatorsWidget {...dummyHealthIndicatorsData} />
                </Col>
            </Row>
        </div>
    );
}
