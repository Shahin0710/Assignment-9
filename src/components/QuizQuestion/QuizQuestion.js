import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import './QuizQuestion.css';

const QuizQuestion = ({item}) => {
  const [checkBoxChecked, setCheckBoxChecked] = useState('');

  const onChangeAttribute = (type) => {
    setCheckBoxChecked(type);
  };

  // console.log(item);
  
  return (
  <>
    <CardGroup className='quiz-question'>
    <Card>
        <Card.Body>
        <Card.Title className='fs-4 fw-semibold'><span className='fw-bold'>Question: </span>{item?.question.slice(3, -4)}</Card.Title>
        <Card>
        <Form>
          {[item?.options[0], item?.options[1], item?.options[2], item?.options[3]].map((type) => (
            <div key={type} className="m-3 d-flex">
                <Form.Check
                  inline
                  label={type}
                  name={type}
                  type="checkbox"
                  id={type}
                  checked={checkBoxChecked === type}
                  onClick={()=>onChangeAttribute(type)}
                />
            </div>
          ))}
        </Form>  
        </Card>
        </Card.Body>
        <Card.Footer>
            <Button className='button' variant="warning">
                Check Correct Answer
            </Button>
        </Card.Footer>
    </Card>
    </CardGroup>  
  </>
  )
}

export default QuizQuestion;
