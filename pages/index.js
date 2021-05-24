import Head from 'next/head';
import { Navbar, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { LimitsAndUsage, LatestActivity, Models, Applications } from '../components';
import { useGetData } from '../hooks/useRequest';

function Home({ usageData, activitiesData }) {
    const { applicationsData, fetchApplicationsError, modelsData, fetchModelsError } = useGetData();
    if (fetchApplicationsError || fetchModelsError) return <Alert variant="danger">Error loading data!</Alert>;
    if (!applicationsData || !modelsData)
        return (
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <Spinner animation="border" role="status" variant="primary">
                    <span className="sr-only">Loading data...</span>
                </Spinner>
            </div>
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

            <Container id="main" fluid>
                <Row>
                    <Col sm={4}>
                        <Container id="sidebar" fluid>
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
                        <Container id="content" fluid>
                            <Row>
                                <Col>
                                    <Models data={modelsData} />
                                </Col>
                            </Row>
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
