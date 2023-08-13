import { selectAllTools } from './toolsSlice';
import { Col, Row } from 'reactstrap';
import TeamToolCard from './TeamToolCard';

const TeamToolsList = () => {
    const tools = selectAllTools();
    
    return (
        <Row className='ms-auto'>
            {tools.map((tool) => {
                return (
                    <Col md='3' xs='8' className='m-4' key={tool.id}>
                        <TeamToolCard tool={tool} />
                    </Col>
                );
            })};
        </Row>
    );
};

export default TeamToolsList;