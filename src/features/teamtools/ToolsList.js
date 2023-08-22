import { selectAllTools } from './toolsSlice';
import { Col, Row } from 'reactstrap';
import ToolCard from './ToolCard';

const ToolsList = () => {
    const tools = selectAllTools();
    
    return (
        <Row className='ms-auto'>
            <h2>Team Tools</h2>
            {tools.map((tool) => {
                return (
                    <Col lg='3' md='4' xs='6' className='m-3' key={tool.id}>
                        <ToolCard tool={tool} />
                    </Col>
                );
            })};
        </Row>
    );
};

export default ToolsList;