import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { LimitsAndUsage, LatestActivity, Models, Applications } from '../components';
import { useGetApplications } from '../useRequest';

function Home({ usageData, activitiesData }) {
    const { applicationsData, error } = useGetApplications('/applications');
    if (error) return <Alert variant="danger">Something went wrong!</Alert>;
    if (!applicationsData)
        return (
            <Spinner animation="border" role="status" variant="primary">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );

    return (
        <>
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>Dashboard</Navbar.Brand>
            </Navbar>

            <Container id="main" style={{ border: '1px solid purple' }} fluid>
                <Row>
                    <Col sm={4}>
                        <Container id="sidebar" style={{ border: '1px solid red' }} fluid>
                            <Row>
                                <Col>
                                    <LimitsAndUsage data={usageData} />
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col>
                                    <LatestActivity data={activitiesData} />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={8}>
                        <Container id="content" style={{ border: '1px solid red' }} fluid>
                            <Row>
                                <Col>
                                    <Models />
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col>
                                    <Applications data={applicationsData} />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export async function getServerSideProps() {
    const [{ default: usageRes }, { default: activitiesRes }] = await Promise.all([import('../data/usage.json'), import('../data/activities.json')]);
    const usageData = JSON.parse(JSON.stringify(usageRes));
    const activitiesData = JSON.parse(JSON.stringify(activitiesRes));
    return { props: { usageData, activitiesData } };
}

export default Home;
