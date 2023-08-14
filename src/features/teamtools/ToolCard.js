import { Button, Card, CardHeader, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

const ToolCard = ({tool}) => {
    const { name, image, title, description } = tool
    return(
        <Card>
            <CardHeader>{name}</CardHeader>
            <CardImg src={image} />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{description}</CardText>
                <Button>{name}</Button>
            </CardBody>
        </Card>
    );
};

export default ToolCard;