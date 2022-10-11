import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './QuizItem.css';

const QuizItem = ({item, handleStartQuiz}) => {

  return (
  <>
    <CardGroup>
    <Card>
        <Card.Img variant="top" className='quiz-item-img'  src={item?.logo} />
        <Card.Body>
        <Card.Title className='fs-4 fw-semibold'>{item?.name}</Card.Title>
        <p className='fs-4 fw-semibold'>Total Topic: <span className='text-warning fs-4 fw-bold'>{item?.total}</span></p>
        </Card.Body>
        <Card.Footer>
            <Button className='button' variant="warning" onClick={() => handleStartQuiz(item?.id)}>
                Start Quiz
            </Button>
        </Card.Footer>
    </Card>
    </CardGroup>  
  </>
  )
}

export default QuizItem
