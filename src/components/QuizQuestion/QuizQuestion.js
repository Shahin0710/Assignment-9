import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './QuizQuestion.css';

const QuizQuestion = ({item}) => {
  return (
  <>
    <CardGroup className='quiz-question'>
    <Card>
        <Card.Body>
        <Card.Title className='fs-4 fw-semibold'>{item?.question}</Card.Title>
          <p className='fs-4 fw-semibold'><span className='text-warning fs-4 fw-bold'>{item?.options[0]}</span></p>
          <p className='fs-4 fw-semibold'><span className='text-warning fs-4 fw-bold'>{item?.options[1]}</span></p>
          <p className='fs-4 fw-semibold'><span className='text-warning fs-4 fw-bold'>{item?.options[2]}</span></p>
          <p className='fs-4 fw-semibold'><span className='text-warning fs-4 fw-bold'>{item?.options[3]}</span></p>
        </Card.Body>
        <Card.Footer>
            <Button className='button' variant="warning">
                Start Quiz
            </Button>
        </Card.Footer>
    </Card>
    </CardGroup>  
  </>
  )
}

export default QuizQuestion