import { Button, Card, CardHeader, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

const ToolCard = ({tool}) => {
    const { name, path, image, title, description } = tool
    return(
        <Card>
            <CardHeader>{name}</CardHeader>
            <CardImg src={image} />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{description}</CardText>
                <div>
                <Link to={`${path}`}>
                        <Button>{name}</Button>
                </Link>
                </div>
            </CardBody>
        </Card>
    );
};

export default ToolCard;