import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Please Feedback If You Want To Share</Card.Title>
        <Button variant="primary">Go Feedback</Button>
      </Card.Body>
      <Card.Footer className="text-muted">©2022. Quick Quiz. All rights reserved. quiz, author.</Card.Footer>
    </Card>
  );
}

export default Footer;
