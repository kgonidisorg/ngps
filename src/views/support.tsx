/* eslint-disable @next/next/no-img-element */
// IntegrationSupportPage.tsx
import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    ListGroup,
    ListGroupItem,
} from "reactstrap";

const IntegrationSupportPage: React.FC = () => {
    return (
        <Container className="content p-4">
            {/* API & SDK */}
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle tag="h3">API &amp; SDK</CardTitle>
                </CardHeader>
                <CardBody>
                    <h5>Endpoints</h5>
                    <ul>
                        <li>
                            <strong>REST:</strong>{" "}
                            <code>GET /api/v1/trains/:id/position</code>,{" "}
                            <code>POST /api/v1/subscribe</code>
                        </li>
                        <li>
                            <strong>WebSocket:</strong>{" "}
                            <code>wss://api.ngps.com/streams/position</code>
                        </li>
                    </ul>

                    <h5 className="mt-4">Code Samples</h5>
                    <Row>
                        <Col md="4">
                            <h6>Python</h6>
                            <pre>
                                <code className="language-python">
                                    {`import requests

resp = requests.get(
    'https://api.ngps.com/v1/trains/42/position',
    headers={'Authorization': 'Bearer <API_KEY>'}
)
print(resp.json())
`}
                                </code>
                            </pre>
                        </Col>
                        <Col md="4">
                            <h6>Node.js</h6>
                            <pre>
                                <code className="language-javascript">
                                    {`const axios = require('axios');

axios.get('https://api.ngps.com/v1/trains/42/position', {
  headers: { 'Authorization': 'Bearer <API_KEY>' }
})
.then(res => console.log(res.data));
`}
                                </code>
                            </pre>
                        </Col>
                        <Col md="4">
                            <h6>Java</h6>
                            <pre>
                                <code className="language-java">
                                    {`HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.ngps.com/v1/trains/42/position"))
    .header("Authorization", "Bearer <API_KEY>")
    .build();

HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
System.out.println(response.body());
`}
                                </code>
                            </pre>
                        </Col>
                    </Row>

                    <h5 className="mt-4">Rate Limits &amp; Auth</h5>
                    <ListGroup flush>
                        <ListGroupItem>
                            <strong>Rate Limits:</strong> 60 requests/minute per
                            API key; burst up to 120/minute.
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>Authentication:</strong> OAuth2 Bearer
                            tokens or API keys via <code>Authorization</code>{" "}
                            header.
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>Pricing Tiers:</strong>
                            <ul className="mb-0">
                                <li>Free: 100 requests/day, 1 train stream</li>
                                <li>
                                    Pro: 10,000 requests/day, up to 10 streams
                                </li>
                                <li>
                                    Enterprise: Unlimited, dedicated support
                                </li>
                            </ul>
                        </ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>

            {/* Documentation */}
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle tag="h3">Documentation</CardTitle>
                </CardHeader>
                <CardBody>
                    <ListGroup flush>
                        <ListGroupItem>
                            <a
                                href="/docs/onboarding-guide.pdf"
                                target="_blank"
                                rel="noopener"
                            >
                                Onboarding Guide
                            </a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <a
                                href="/docs/system-requirements.md"
                                target="_blank"
                                rel="noopener"
                            >
                                System Requirements
                            </a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <a
                                href="/docs/troubleshooting-faqs.md"
                                target="_blank"
                                rel="noopener"
                            >
                                Troubleshooting &amp; FAQs
                            </a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <a
                                href="/docs/changelog.md"
                                target="_blank"
                                rel="noopener"
                            >
                                Change Log
                            </a>
                        </ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>

            {/* Support & Contact */}
            <Card>
                <CardHeader>
                    <CardTitle tag="h3">Support &amp; Contact</CardTitle>
                </CardHeader>
                <CardBody>
                    <ListGroup flush>
                        <ListGroupItem>
                            <strong>Support Portal:</strong>{" "}
                            <a
                                href="https://support.ngps.com"
                                target="_blank"
                                rel="noopener"
                            >
                                support.ngps.com
                            </a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>Email:</strong> support@ngps.com | 
                            <strong>Phone:</strong> +1 (800) 555-1234
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>Slack:</strong>{" "}
                            <a
                                href="https://ngps.slack.com"
                                target="_blank"
                                rel="noopener"
                            >
                                ngps.slack.com
                            </a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>Community Forum:</strong>{" "}
                            <a
                                href="https://community.ngps.com"
                                target="_blank"
                                rel="noopener"
                            >
                                community.ngps.com
                            </a>
                        </ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        </Container>
    );
};

export default IntegrationSupportPage;
