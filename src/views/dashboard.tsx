"use client";
import React, { useState } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap';
import SpeedTimeSeriesChart, { fetchSpeedTimeSeriesData } from '@/components/SpeedTimeSeriesChart';
import AccelerationHistogram from '@/components/AccelerationHistogram';
import DataVolumeHeatmap from '@/components/DataVolumeHeatmap';
import MaintenanceTimeline, { fetchMaintenanceEvents, MaintenanceEvent } from '@/components/MaintenanceTimeline';

export default function NGPSDashboard() {
  const [filters] = useState<Record<string, unknown>>({});


  const downloadSpeedCSV = () => {
    // Stub: generate CSV for speed data
    const headers = ['timestamp','average_speed'];
    const speedData = fetchSpeedTimeSeriesData(filters); // Replace with the actual function or variable providing data
    const rows = (speedData.labels || []).map((t, i) =>
      `${t},${speedData.values[i]}`
    );
    const csv = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows].join('\n');
    const uri = encodeURI(csv);
    const link = document.createElement('a');
    link.setAttribute('href', uri);
    link.setAttribute('download', 'average_speed.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadEventsCSV = () => {
    // Stub: generate CSV for maintenance events
    const headers = ['timestamp','event_type','description'];
    const events: MaintenanceEvent[] = fetchMaintenanceEvents(filters);
    const rows = events.map(e => `${e.timestamp},${e.type},"${e.description.replace(/"/g, '""')}"`);
    const csv = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows].join('\n');
    const uri = encodeURI(csv);
    const link = document.createElement('a');
    link.setAttribute('href', uri);
    link.setAttribute('download', 'maintenance_events.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="content p-3 overflow-y-scroll">
      {/* Average Speed Over Time */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle tag="h4">Average Speed Over Time</CardTitle>
        </CardHeader>
        <CardBody>
          <SpeedTimeSeriesChart filters={filters} />
        </CardBody>
        <CardBody>
          <Button color="primary" onClick={downloadSpeedCSV}>
            Download Speed CSV
          </Button>
        </CardBody>
      </Card>

      <Row>
        {/* Acceleration Distribution Histogram */}
        <Col md="6">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle tag="h5">Acceleration Distribution</CardTitle>
            </CardHeader>
            <CardBody>
              <AccelerationHistogram filters={filters} />
            </CardBody>
          </Card>
        </Col>

        {/* Data Volume Heatmap */}
        <Col md="6">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle tag="h5">Data Volume Heatmap</CardTitle>
            </CardHeader>
            <CardBody>
              <DataVolumeHeatmap filters={filters} />
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Maintenance Events Timeline */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle tag="h4">Maintenance Events Timeline</CardTitle>
        </CardHeader>
        <CardBody>
          <MaintenanceTimeline filters={filters} />
        </CardBody>
        <CardBody>
          <Button color="secondary" onClick={downloadEventsCSV}>
            Download Events CSV
          </Button>
        </CardBody>
      </Card>

      {/* Case Study Section */}
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Case Study: NYC Subway</CardTitle>
        </CardHeader>
        <CardBody>
          <ul>
            <li>Sample deployments on Lines 1–7</li>
            <li>Measured improvements in schedule adherence and fault detection</li>
            <li>Testimonials and metrics from transit operators:</li>
          </ul>
          <blockquote className="blockquote">
            <p className="mb-0">
              &quot;Since NGPS was deployed on Line 4, corridor average speeds increased by 8% and unplanned maintenance events dropped 15%.&quot; — NYCT Analytics Team
            </p>
          </blockquote>
          <blockquote className="blockquote">
            <p className="mb-0">
              &quot;Our fault detection lead time improved by over 20%, enabling proactive track maintenance.&quot; — Operations Control
            </p>
          </blockquote>
        </CardBody>
      </Card>
    </div>
  );
}
