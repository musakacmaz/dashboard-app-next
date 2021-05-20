import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { LimitsAndUsage, LatestActivity, Models, Applications } from '../components';

function Home({ usageData }) {
    return (
        <Container id="body">
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
                            <Row>
                                <Col>
                                    <LatestActivity />
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
                            <Row>
                                <Col>
                                    <Applications />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export async function getServerSideProps() {
  const { default: usageRes } = await import('../data/usage.json');
  const usageData = JSON.parse(JSON.stringify(usageRes));
  return { props: { usageData } }
}

export default Home;
