import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './QuizItem.css';

const QuizItem = ({item}) => {

  console.log(item);
  
  return (
  <>
    <CardGroup>
    <Card>
        <Card.Img variant="top" className='quiz-item-img'  src={item?.logo} />
        <Card.Body>
        <Card.Title>{item?.name}</Card.Title>
        </Card.Body>
        <Card.Footer>
            <Button className='button' variant="warning" onClick={() => handleAddToActivity(item?.id)}>
                Start Quiz
            </Button>
        </Card.Footer>
    </Card>
    </CardGroup>  
  </>
  )
}

export default QuizItem
