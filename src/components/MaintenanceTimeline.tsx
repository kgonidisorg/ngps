// MaintenanceTimeline.tsx
"use client";
import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export interface MaintenanceEvent {
    timestamp: string;
    type: string;
    description: string;
}

export function fetchMaintenanceEvents(
    filters: Record<string, unknown>
): MaintenanceEvent[] {
    // Mock implementation or replace with actual data fetching logic
    if (filters === undefined) {
        return [];
    }
    return [
        {
            timestamp: "2023-10-01 12:00",
            type: "Scheduled",
            description: "Routine maintenance",
        },
        {
            timestamp: "2023-10-02 14:00",
            type: "Unscheduled",
            description: "Unexpected downtime",
        },
        {
            timestamp: "2023-10-03 16:00",
            type: "Scheduled",
            description: "Software update",
        },
        {
            timestamp: "2023-10-04 18:00",
            type: "Unscheduled",
            description: "Hardware failure",
        },
        {
            timestamp: "2023-10-05 20:00",
            type: "Scheduled",
            description: "Network upgrade",
        },
    ];
}

export interface MaintenanceTimelineProps {
    filters: Record<string, unknown>;
}

const MaintenanceTimeline: React.FC<MaintenanceTimelineProps> = ({
    filters,
}) => {
    const [events, setEvents] = useState<MaintenanceEvent[]>([]);

    useEffect(() => {
        setEvents(fetchMaintenanceEvents(filters));
    }, [filters]);

    return (
        <ListGroup>
            {events.map((e, i) => (
                <ListGroupItem key={i}>
                    <strong>{e.timestamp}</strong> — {e.type}: {e.description}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default MaintenanceTimeline;
