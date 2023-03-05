import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Layout({ children }) {
  return (
    <Container>
      <Row>{children}</Row>
    </Container>
  );
}

export default Layout;
