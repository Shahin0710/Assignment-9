import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './fontawesome';
import './QuizQuestion.css';

const QuizQuestion = ({item}) => {
  const [checkBoxChecked, setCheckBoxChecked] = useState('');
  const [notifyValue, setNotifyValue] = useState('');

  const notify = () => toast(checkBoxChecked === notifyValue ? "Sorry! Your Answer Is Incorrect" : "Wow Your Answer Is Correct!");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeAttribute = (type, item) => {
    notify();
    setCheckBoxChecked(type);
    setNotifyValue(item);
  };

    useEffect( () =>{
  }, [notifyValue]);

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
                  onClick={()=>onChangeAttribute(type, item?.correctAnswer)}
                />
            </div>
          ))}
        </Form>  
        </Card>
        </Card.Body>
        <Card.Footer>
            <Button className='button' variant="warning"  onClick={()=>handleShow()}>
              <FontAwesomeIcon icon="eye" variant="warning" />
            </Button>
        </Card.Footer>
    </Card>
    </CardGroup>  
    <ToastContainer />
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Correct Answer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {item?.question.slice(3, -4)}
      </Modal.Body>
      <Modal.Body>
          <span className='text-success fw-bold'>
            Correct Answer: {item?.correctAnswer}
          </span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default QuizQuestion;
