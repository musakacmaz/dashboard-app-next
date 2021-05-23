import { CardColumns, Card, ListGroup } from 'react-bootstrap';

export default function Applications({ data }) {
    return (
        <>
            <h3 className="title">Applications</h3>
            <CardColumns>
                {data.map(({ id, name, deviceCount, platforms }) => (
                    <Card key={id}>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>Device Count: {deviceCount}</Card.Text>
                            {platforms.length > 0 ? <Card.Subtitle>Platforms</Card.Subtitle> : null}
                            {platforms.length > 0 ? (
                                platforms.map(({ id, platform, modelTarget: { model, runtime, version } }) => (
                                    <ListGroup.Item key={id}>
                                        <text>
                                            {platform} - {runtime} / {model} / {version}
                                        </text>
                                    </ListGroup.Item>
                                ))
                            ) : (
                                <text>No Data</text>
                            )}
                        </Card.Body>
                    </Card>
                ))}
            </CardColumns>
        </>
    );
}
