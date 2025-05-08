import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
} from "reactstrap";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// 1. Position Error Chart
export interface PositionErrorChartProps {
    labels: string[];
    raw: number[];
    fused: number[];
    groundTruth: number[];
    lastUpdated?: string;
}
export const PositionErrorChart: React.FC<PositionErrorChartProps> = ({
    labels,
    raw,
    fused,
    groundTruth,
    lastUpdated,
}) => {
    const data = {
        labels,
        datasets: [
            {
                label: "Raw",
                borderColor: "#f17e5d",
                backgroundColor: "transparent",
                pointRadius: 2,
                data: raw,
                tension: 0.4,
            },
            {
                label: "Fused",
                borderColor: "#6bd098",
                backgroundColor: "transparent",
                pointRadius: 2,
                data: fused,
                tension: 0.4,
            },
            {
                label: "Ground Truth",
                borderColor: "#fcc468",
                backgroundColor: "transparent",
                pointRadius: 2,
                data: groundTruth,
                tension: 0.4,
            },
        ],
    };
    const options = {
        plugins: { legend: { display: true } },
        scales: {
            y: { grid: { display: false } },
            x: { grid: { display: false } },
        },
    };
    console.log("PositionErrorChart data:", data);
    return (
        <Card className="card-chart">
            <CardHeader>
                <CardTitle tag="h5">Position Error (m)</CardTitle>
            </CardHeader>
            <CardBody>
                <Line data={data} options={options} />
            </CardBody>
            {lastUpdated && (
                <CardFooter>
                    <div className="stats">Updated {lastUpdated}</div>
                </CardFooter>
            )}
        </Card>
    );
};

// 2. Fusion Latency Widget (Gauge + Sparkline)
export interface FusionLatencyWidgetProps {
    avgLatency: number;
    maxLatency: number;
    labels: string[];
    series: number[];
    lastUpdated?: string;
}
export const FusionLatencyWidget: React.FC<FusionLatencyWidgetProps> = ({
    avgLatency,
    maxLatency,
    labels,
    series,
    lastUpdated,
}) => {
    const gaugeData = {
        labels: ["Latency"],
        datasets: [
            {
                data: [avgLatency, Math.max(maxLatency - avgLatency, 0)],
                backgroundColor: ["#51CACF", "#e3e3e3"],
                hoverBackgroundColor: ["#51CACF", "#e3e3e3"],
                borderWidth: 0,
            },
        ],
    };
    const gaugeOptions = {
        rotation: -Math.PI,
        circumference: Math.PI,
        cutout: "70%",
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
    };

    const sparkData = {
        labels,
        datasets: [
            {
                data: series,
                borderColor: "#51CACF",
                backgroundColor: "transparent",
                pointRadius: 0,
                tension: 0.4,
            },
        ],
    };
    const sparkOptions = {
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: {
            y: { display: true },
            x: { display: true },
        },
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle tag="h5">Fusion Latency</CardTitle>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col md="6" className="text-center">
                        <Doughnut data={gaugeData} options={gaugeOptions} />
                        <h3 className="mt-2">{avgLatency.toFixed(1)} ms</h3>
                    </Col>
                    <Col md="6">
                        <Line
                            data={sparkData}
                            options={sparkOptions}
                            height={80}
                        />
                    </Col>
                </Row>
            </CardBody>
            {lastUpdated && (
                <CardFooter>
                    <div className="stats">Updated {lastUpdated}</div>
                </CardFooter>
            )}
        </Card>
    );
};

// 3. Throughput Chart (Bar)
export interface ThroughputChartProps {
    labels: string[];
    data: number[];
    lastUpdated?: string;
}
export const ThroughputChart: React.FC<ThroughputChartProps> = ({
    labels,
    data: series,
    lastUpdated,
}) => {
    const chartData = {
        labels,
        datasets: [
            {
                label: "Points/s",
                data: series,
                backgroundColor: "#fbc658",
                barPercentage: 0.8,
            },
        ],
    };
    const options = {
        plugins: { legend: { display: false } },
        scales: {
            y: { ticks: { color: "#9f9f9f" }, grid: { display: false } },
            x: { ticks: { color: "#9f9f9f" }, grid: { display: false } },
        },
    };

    return (
        <Card className="card-chart">
            <CardHeader>
                <CardTitle tag="h5">Throughput</CardTitle>
            </CardHeader>
            <CardBody>
                <Bar data={chartData} options={options} />
            </CardBody>
            {lastUpdated && (
                <CardFooter>
                    <div className="stats">Updated {lastUpdated}</div>
                </CardFooter>
            )}
        </Card>
    );
};

// 4. Anomaly & Drop-out Count Widget
export interface AnomalyDropoutWidgetProps {
    count: number;
    labels: string[];
    data: number[];
    lastUpdated?: string;
}
export const AnomalyDropoutWidget: React.FC<AnomalyDropoutWidgetProps> = ({
    count,
    labels,
    data,
    lastUpdated,
}) => {
    const sparkData = {
        labels,
        datasets: [
            {
                data,
                backgroundColor: "#ef8157",
                barPercentage: 0.8,
            },
        ],
    };
    const sparkOptions = {
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: { y: { display: false }, x: { display: true} },
    };

    return (
        <Card className="card-stats">
            <CardBody>
                <Row>
                    <Col md="4" xs="6" className="text-center">
                        <div className="numbers">
                            <p className="card-category">Anomalies</p>
                            <CardTitle tag="p">{count}</CardTitle>
                        </div>
                    </Col>
                    <Col
                        md="8"
                        xs="6"
                        className="d-flex justify-content-end align-items-center"
                    >
                        <Bar
                            data={sparkData}
                            options={sparkOptions}
                            height={50}
                        />
                    </Col>
                </Row>
            </CardBody>
            {lastUpdated && (
                <CardFooter>
                    <div className="stats">Updated {lastUpdated}</div>
                </CardFooter>
            )}
        </Card>
    );
};

// 5. Health Indicators
export interface HealthIndicator {
    label: string;
    status: "good" | "warning" | "critical";
}
export interface HealthIndicatorsWidgetProps {
    indicators: HealthIndicator[];
}
export const HealthIndicatorsWidget: React.FC<HealthIndicatorsWidgetProps> = ({
    indicators,
}) => {
    const iconClass = (status: string) => {
        switch (status) {
            case "good":
                return "nc-icon nc-check-2 text-success";
            case "warning":
                return "nc-icon nc-alert-circle-i text-warning";
            case "critical":
                return "nc-icon nc-simple-remove text-danger";
            default:
                return "";
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle tag="h5">Health Indicators</CardTitle>
            </CardHeader>
            <CardBody>
                <ListGroup flush>
                    {indicators.map((ind, i) => (
                        <ListGroupItem
                            key={i}
                            className="d-flex align-items-center"
                        >
                            <i className={`${iconClass(ind.status)} mr-2`} />
                            {ind.label}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </CardBody>
        </Card>
    );
};
