import { Table, Form } from 'react-bootstrap';

export default function Models({ data }) {
    return (
        <>
            <h3 className="title">Models</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Source</th>
                        <th>Tags</th>
                        <th>Versions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ id, name, source, tags, versions }, index) => (
                        <tr key={id}>
                            <td>{index + 1}</td>
                            <td>{name}</td>
                            <td>{source}</td>
                            <td>{tags.join(', ')}</td>
                            <td>
                                {versions.length > 0 ? (
                                    <Form.Group controlId="modelVersionsSelect">
                                        <Form.Control as="select">
                                            {versions.map(({ name }, index) => (
                                                <option key={index}>{name}</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                ) : null}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}
