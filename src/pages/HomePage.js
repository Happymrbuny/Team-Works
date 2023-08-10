import { Container, Row } from 'reactstrap';
import Subheader from '../components/SubHeader';

const HomePage =() => {
    return (
        <Container>
            <SubHeader current='Home' />
            <Row>
                HOME PAGE
            </Row>
        </Container>
    )
};

export default HomePage;