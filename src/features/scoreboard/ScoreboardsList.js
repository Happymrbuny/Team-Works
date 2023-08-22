import { selectAllScoreboards } from './scoreboardsSlice';
import { Col, Row } from 'reactstrap';
import ScoreboardCard from './ScoreboardCard';

const ScoreboardsList = () => {
    const scoreboards = selectAllScoreboards();
    
    return (
        <Row className='ms-auto'>
            <h2>Score Keeping</h2>
            {scoreboards.map((scoreboard) => {
                return (
                    <Col lg='3' md='4' xs='6' className='m-3' key={scoreboard.id}>
                        <ScoreboardCard scoreboard={scoreboard} />
                    </Col>
                );
            })};
        </Row>
    );
};

export default ScoreboardsList;