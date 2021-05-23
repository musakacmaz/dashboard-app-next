import { ListGroup, ProgressBar } from 'react-bootstrap';

function getProgressBarVariant(percentage) {
    let variant = '';
    if (percentage <= 50) {
        variant = 'success';
    } else if (percentage <= 75) {
        variant = 'warning';
    } else {
        variant = 'danger';
    }
    return variant;
}

export default function LimitsAndUsage({ data }) {
    const itemList = [];
    let index = 0;
    for (const item in data) {
        const percentage = (data[item].usage / data[item].limit) * 100;
        const variant = getProgressBarVariant(percentage);
        itemList.push(
            <ListGroup.Item key={index}>
                <h5 className="title">{item}</h5>
                <ProgressBar variant={variant} now={percentage} label={`${percentage}%`} />
            </ListGroup.Item>,
        );
        index++;
    }
    return (
        <>
            <h3 className="title">Limits and Usage</h3>
            <ListGroup>{itemList}</ListGroup>
        </>
    );
}
