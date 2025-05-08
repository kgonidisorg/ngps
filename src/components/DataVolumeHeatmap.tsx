"use client";
import React, { useEffect, useState } from "react";

export interface VolumeHeatmapData {
    xLabels: string[];
    yLabels: string[];
    values: number[][];
}

function fetchVolumeHeatmapData(
    filters: Record<string, unknown>
): VolumeHeatmapData {
    // Mock implementation or replace with actual data fetching logic
    if (filters === undefined) {
        return { xLabels: [], yLabels: [], values: [] };
    }
    return {
        xLabels: ["0-10", "10-20", "20-30", "30-40", "40-50"],
        yLabels: ["0-10", "10-20", "20-30", "30-40", "40-50"],
        values: [
            [5, 15, 25, 10, 8],
            [10, 20, 30, 15, 5],
            [15, 25, 35, 20, 10],
            [20, 30, 40, 25, 15],
            [25, 35, 45, 30, 20],
        ],
    };
}

export interface DataVolumeHeatmapProps {
    filters: Record<string, unknown>;
}

const DataVolumeHeatmap: React.FC<DataVolumeHeatmapProps> = ({ filters }) => {
    const [heat, setHeat] = useState<VolumeHeatmapData>({
        xLabels: [],
        yLabels: [],
        values: [],
    });

    useEffect(() => {
        setHeat(fetchVolumeHeatmapData(filters));
    }, [filters]);

    // Use a simple library or custom canvas to render heatmap
    return (
        <div className="text-center h-100">
            <div className="flex justify-center">
            <span className="w-12"></span>
            {heat.xLabels.map((x, i) => (
                <span key={i} className="flex-1 text-center">
                {x}
                </span>
            ))}
            </div>
            {heat.yLabels.map((y, i) => (
            <div key={i} className="flex items-center">
                <span className="w-12 text-right">{y}</span>
                {heat.values[i].map((v, j) => (
                <div
                    key={j}
                    className="flex-1"
                    style={{
                    height: `${350 / heat.yLabels.length}px`,
                    backgroundColor: `rgba(255,0,0,${v / 100})`,
                    }}
                />
                ))}
            </div>
            ))}
        </div>
    );
};

export default DataVolumeHeatmap;
