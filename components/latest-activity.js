import { ListGroup } from 'react-bootstrap';

export default function LatestActivity({ data }) {
    return (
        <>
            <h3 className="title">Latest Activity</h3>
            <ListGroup variant="flush">
                {data.map(({ type, desc, date }, index) => (
                    <ListGroup.Item key={index}>
                        <p>
                            <strong>{type}</strong> {desc} - <i>{date}</i>
                        </p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
}
