"use client";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    ZoomControl,
} from "react-leaflet";
import { trains, Train } from "./data";
import {
    AlertTriangle,
    Gauge,
    MapPin,
    Ruler,
    Train as TrainIcon,
} from "lucide-react";
import { CardTitle, Col, Row } from "reactstrap";

export default function SubwayMap() {
    return (
        <MapContainer
            center={[40.7128, -74.006]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
        >
            <ZoomControl position="bottomright" />
            <TileLayer
                url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=kvmUs1w8JgDg4WwSjDlP"
                attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a>'
            />
            {trains.map((train: Train) => (
                <Marker
                    key={train.id}
                    position={[train.latitude, train.longitude]}
                    icon={L.icon({
                        iconUrl: "/subway.webp",
                        iconSize: [40, 40],
                        iconAnchor: [12, 25],
                        className: "text-blue-500 fill-current",
                    })}
                >
                    <Popup minWidth={250}>
                        <div className="w-[250px]">
                            <CardTitle
                                tag="h3"
                                className="text-lg font-bold text-blue-600 mb-3"
                            >
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <TrainIcon className="text-2xl" />
                                    </Col>
                                    <Col>
                                        Train{" "}
                                        <strong className="ml-1">
                                            {train.id}
                                        </strong>
                                    </Col>
                                </Row>
                            </CardTitle>
                            <Row className="mb-2">
                                <Col xs="auto">
                                    <Gauge className="text-green-500" />
                                </Col>
                                <Col>
                                    <strong>Speed: </strong> {train.speedKmh}{" "}
                                    km/h
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col xs="auto">
                                    <MapPin className="text-blue-500" />
                                </Col>
                                <Col>
                                    <strong>Next Station: </strong>{" "}
                                    {train.nextStation}
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col xs="auto">
                                    <Ruler className="text-orange-500" />
                                </Col>
                                <Col>
                                    <strong>Distance: </strong>{" "}
                                    {train.distanceToNextM} m
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="auto">
                                    <AlertTriangle className="text-red-500" />
                                </Col>
                                <Col>
                                    <strong>Conditions: </strong>{" "}
                                    {train.trackConditions}
                                </Col>
                            </Row>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
