export interface Train {
    id: string;
    latitude: number;
    longitude: number;
    speedKmh: number;
    nextStation: string;
    distanceToNextM: number;
    trackConditions: string;
}

export const trains: Train[] = [
    // Manhattan
    {
        id: "T1",
        latitude: 40.7128,
        longitude: -74.006,
        speedKmh: 45,
        nextStation: "Central Station",
        distanceToNextM: 3000,
        trackConditions: "Good",
    },
    {
        id: "T2",
        latitude: 40.715,
        longitude: -74.01,
        speedKmh: 30,
        nextStation: "Parkside",
        distanceToNextM: 5000,
        trackConditions: "Maintenance Required",
    },
    {
        id: "T5",
        latitude: 40.713,
        longitude: -74.008,
        speedKmh: 55,
        nextStation: "Union Square",
        distanceToNextM: 7000,
        trackConditions: "Good",
    },
    {
        id: "T6",
        latitude: 40.714,
        longitude: -74.009,
        speedKmh: 40,
        nextStation: "Times Square",
        distanceToNextM: 4000,
        trackConditions: "Moderate",
    },
    {
        id: "T7",
        latitude: 40.716,
        longitude: -74.007,
        speedKmh: 35,
        nextStation: "Grand Central",
        distanceToNextM: 6000,
        trackConditions: "Good",
    },

    // Brooklyn
    {
        id: "T3",
        latitude: 40.6782,
        longitude: -73.9442,
        speedKmh: 60,
        nextStation: "Downtown Brooklyn",
        distanceToNextM: 8000,
        trackConditions: "Good",
    },
    {
        id: "T4",
        latitude: 40.68,
        longitude: -73.95,
        speedKmh: 50,
        nextStation: "Prospect Park",
        distanceToNextM: 7000,
        trackConditions: "Moderate",
    },
    {
        id: "T8",
        latitude: 40.675,
        longitude: -73.94,
        speedKmh: 55,
        nextStation: "Atlantic Avenue",
        distanceToNextM: 9000,
        trackConditions: "Good",
    },
    {
        id: "T9",
        latitude: 40.676,
        longitude: -73.942,
        speedKmh: 45,
        nextStation: "Brooklyn Museum",
        distanceToNextM: 5000,
        trackConditions: "Moderate",
    },
    {
        id: "T10",
        latitude: 40.677,
        longitude: -73.943,
        speedKmh: 50,
        nextStation: "Coney Island",
        distanceToNextM: 10000,
        trackConditions: "Good",
    },
];

// { datetime, accuracy }
export const PositionData = [
    { datetime: "2023-10-01T12:00:00Z", accuracy: 0.95 },
    { datetime: "2023-10-01T12:05:00Z", accuracy: 0.93 },
    { datetime: "2023-10-01T12:10:00Z", accuracy: 0.97 },
    { datetime: "2023-10-01T12:15:00Z", accuracy: 0.92 },
    { datetime: "2023-10-01T12:20:00Z", accuracy: 0.94 },
    { datetime: "2023-10-01T12:25:00Z", accuracy: 0.96 },
    { datetime: "2023-10-01T12:30:00Z", accuracy: 0.91 },
    { datetime: "2023-10-01T12:35:00Z", accuracy: 0.98 },
    { datetime: "2023-10-01T12:40:00Z", accuracy: 0.99 },
    { datetime: "2023-10-01T12:45:00Z", accuracy: 0.95 },
    { datetime: "2023-10-01T12:50:00Z", accuracy: 0.97 },
    { datetime: "2023-10-01T12:55:00Z", accuracy: 0.96 },
    { datetime: "2023-10-01T13:00:00Z", accuracy: 0.94 },
    { datetime: "2023-10-01T13:05:00Z", accuracy: 0.93 },
];

export const WeatherData = [
    { weather: "Sun", percentage: 33, color: "yellow" },
    { weather: "Rain", percentage: 25, color: "blue" },
    { weather: "Clouds", percentage: 20, color: "gray" },
    { weather: "Snow", percentage: 10, color: "lightgray" },
];

// PositionErrorChart dummy data (labels, raw, fused, groundTruth, lastUpdated)
export const dummyPositionErrorChartData = {
    // For PositionErrorChart: labels
    labels: ["12:00", "12:05", "12:10", "12:15"],
    // For PositionErrorChart: raw
    raw: [2.1, 2.5, 2.0, 1.8],
    // For PositionErrorChart: fused
    fused: [1.8, 2.0, 1.7, 1.5],
    // For PositionErrorChart: groundTruth
    groundTruth: [1.9, 2.1, 1.6, 1.4],
    // For PositionErrorChart: lastUpdated
    lastUpdated: "2025-05-07T12:30:00Z",
};

// FusionLatencyWidget dummy data (avgLatency, maxLatency, labels, series, lastUpdated)
export const dummyFusionLatencyData = {
    // For FusionLatencyWidget: avgLatency
    avgLatency: 12.5,
    // For FusionLatencyWidget: maxLatency
    maxLatency: 25.0,
    // For FusionLatencyWidget: labels
    labels: ["12:00", "12:05", "12:10", "12:15"],
    // For FusionLatencyWidget: series
    series: [12.0, 15.0, 10.0, 20.0],
    // For FusionLatencyWidget: lastUpdated
    lastUpdated: "2025-05-07T12:35:00Z",
};

// ThroughputChart dummy data (labels, data, lastUpdated)
export const dummyThroughputChartData = {
    // For ThroughputChart: labels
    labels: ["12:00", "12:05", "12:10", "12:15"],
    // For ThroughputChart: data
    data: [100, 150, 120, 130],
    // For ThroughputChart: lastUpdated
    lastUpdated: "2025-05-07T12:40:00Z",
};

// AnomalyDropoutWidget dummy data (count, labels, data, lastUpdated)
export const dummyAnomalyDropOutData = {
    // For AnomalyDropoutWidget: count
    count: 4,
    // For AnomalyDropoutWidget: labels
    labels: ["12:00", "12:05", "12:10", "12:15"],
    // For AnomalyDropoutWidget: data
    data: [1, 2, 0, 1],
    // For AnomalyDropoutWidget: lastUpdated
    lastUpdated: "2025-05-07T12:45:00Z",
};

// HealthIndicatorsWidget dummy data (indicators)
export const dummyHealthIndicatorsData: {
    indicators: { label: string; status: "good" | "warning" | "critical" }[];
} = {
    // For HealthIndicatorsWidget: indicators
    indicators: [
        { label: "Database Connection", status: "good" },
        { label: "API Latency", status: "warning" },
        { label: "Sensor Sync", status: "critical" },
    ],
};
