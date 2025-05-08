"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

export interface AccelHistogramData {
    bins: string[];
    counts: number[];
}

function fetchAccelHistogramData(
    filters: Record<string, unknown>
): AccelHistogramData {
    // Mock implementation or replace with actual data fetching logic
    if (filters === undefined) {
        return { bins: [], counts: [] };
    }
    return {
        bins: ["0-10", "10-20", "20-30", "30-40", "40-50"],
        counts: [5, 15, 25, 10, 8],
    };
}

export interface AccelerationHistogramProps {
    filters: Record<string, unknown>;
}

const AccelerationHistogram: React.FC<AccelerationHistogramProps> = ({
    filters,
}) => {
    const [hist, setHist] = useState<AccelHistogramData>({
        bins: [],
        counts: [],
    });

    useEffect(() => {
        setHist(fetchAccelHistogramData(filters));
    }, [filters]);

    const chartData = { labels: hist.bins, datasets: [{ data: hist.counts }] };

    return <Bar data={chartData} />;
};

export default AccelerationHistogram;
