"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
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

export interface SpeedTimeSeriesData {
    labels: string[];
    values: number[];
}

// Removed invalid module augmentation and replaced with a standalone function declaration
export function fetchSpeedTimeSeriesData(
    filters: Record<string, unknown>
): SpeedTimeSeriesData {
    // Mock implementation or replace with actual data fetching logic
    if (filters === undefined) {
        return { labels: [], values: [] };
    }
    return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        values: [10, 20, 15, 25, 30, 20],
    };
}

export interface SpeedTimeSeriesChartProps {
    filters: Record<string, unknown>;
}

const SpeedTimeSeriesChart: React.FC<SpeedTimeSeriesChartProps> = ({
    filters,
}) => {
    const [data, setData] = useState<SpeedTimeSeriesData>({
        labels: [],
        values: [],
    });
    useEffect(() => {
        setData(fetchSpeedTimeSeriesData(filters));
    }, [filters]);

    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: "Avg Speed (km/h)",
                data: data.values,
                fill: false,
                borderColor: "#42A5F5",
                tension: 0.3,
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

    return <Line data={chartData} options={options} />;
};

export default SpeedTimeSeriesChart;
