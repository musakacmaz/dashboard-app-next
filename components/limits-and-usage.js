import { ListGroup, ProgressBar } from 'react-bootstrap';

export default function LimitsAndUsage() {
    const data = {
        Models: {
            limit: 10,
            usage: 6,
        },
        Apps: {
            limit: 20,
            usage: 10,
        },
        Devices: {
            limit: 50,
            usage: 45,
        },
    };

    const itemList = [];
    let index = 0;
    for (const item in data) {
        const percentage = (data[item].usage / data[item].limit) * 100;
        itemList.push(
            <ListGroup.Item key={index}>
                <ProgressBar variant="success" now={percentage} />
            </ListGroup.Item>
        );
        index++;
    }
    return (
        <>
            <h2 className="title">Limits and Usage</h2>
            <ListGroup>{itemList}</ListGroup>
        </>
    );
}
