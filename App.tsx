import * as React from 'react';
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Badge,
  Alert,
} from 'react-bootstrap';
import './style.css';

import Child from './components/Child';

export default function App() {
  const numBtn = React.useRef<any>(null);

  const [valInp, setValInp] = React.useState<string>('');
  const [cred, setCred] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (valInp === '') {
      numBtn.current.disabled = 'disabled';
    } else {
      numBtn.current.disabled = '';
    }
  }, [valInp]);

  React.useEffect(() => {
    let locSto = localStorage.getItem('item');
    if (locSto) {
      setCred(true);
    } else {
      setCred(false);
    }
  });

  const handleClickButton = (e: React.MouseEvent<HTMLElement>) => {
    const btn = e.target as HTMLElement | HTMLButtonElement;
    localStorage.setItem('item', valInp.toString());
    setCred(true);
    setValInp('');
    //btn.innerText = 'Agregado';
    //(btn as any).disabled = 'disabled';
  };

  const handleDeleteButton = (e: React.MouseEvent<HTMLElement>) => {
    localStorage.removeItem('item');
    setCred(false);
  };
  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col>
            <Alert bg="primary">
              <h1 className="alert">Biblioteca Nacional Mariano Moreno</h1>
            </Alert>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col
            className="d-inline-block text-center align-items-center"
            style={{ verticalAlign: 'middle' }}
          >
            <Button
              variant="primary"
              className="rounded-0 mx-2"
              onClick={handleClickButton}
              ref={numBtn}
              title="Agregar credencial"
            >
              Aceptar
            </Button>
            <Button
              variant="danger"
              className="rounded-0 sm"
              onClick={handleDeleteButton}
              title="Borrar credencial"
            >
              x
            </Button>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Ingresar número de credencial de investigador
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresa un número"
                  value={valInp}
                  onChange={(e) => setValInp(e.target.value)}
                  className="rounded-0"
                />
                {cred ? (
                  <Badge className="mt-2 rounded-0 p-1" bg="danger">
                    Ya hay una credencial ingresada!{' '}
                    <small>({localStorage.getItem('item')})</small>
                  </Badge>
                ) : (
                  <Badge className="mt-2 rounded-0 p-1" bg="success">
                    Puede ingresar su credencial
                  </Badge>
                )}
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Child />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
