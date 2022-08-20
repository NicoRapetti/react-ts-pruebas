import * as React from 'react';
import { Placeholder, Card, Button } from 'react-bootstrap';

const Child = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <React.Fragment>
      {isLoading && (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Prueba de Tarjeta</Card.Title>
            <Card.Text>Los secretos de la BNMM</Card.Text>
            <Button variant="primary">Ingresar</Button>
          </Card.Body>
        </Card>
      )}
      {!isLoading && (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
          </Card.Body>
        </Card>
      )}
    </React.Fragment>
  );
};

export default Child;
