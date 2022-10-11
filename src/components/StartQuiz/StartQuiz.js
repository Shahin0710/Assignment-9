import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../App';
import image from '../../quiz-time.png';
import QuizItem from '../QuizItem/QuizItem';
import './StartQuiz.css';

const StartQuiz = () => {
    const navigate = useNavigate();
    const [quizItem, setQuizItem] = useContext(QuizContext);

    const [quiz, setQuiz] = useState([]);

    const handleStartQuiz = (id) =>{
        setQuizItem(id);
        navigate(`/single_quiz_id=${id}`);
    }

    useEffect( () =>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res=> res.json())
        .then(data => setQuiz(data.data))
    }, []);

  return (
    <div className='quiz'>
        <div className='header-text'>
            <Card className='quiz-header'>
            <div className='fs-2 fw-bold'>Lets Start <span className='text-warning fs-3 fw-bold'>Quick Quiz</span></div>
            <Card.Body>
                <div>
                    <img 
                        src={image} 
                        alt="images" 
                        width="100%"
                        height="150"
                        className='mr-5'
                    />
                </div>
            </Card.Body>
                <Card.Title className='text-success fw-bold'>
                    If you’re on the search for a fun team-building activity, 
                    then a virtual quiz is a great way to connect with colleagues 
                    and get to know one another better.
                </Card.Title>
            </Card>
        </div>

        <div className="quiz-container">
            {
            quiz.map(item=><QuizItem 
                key={item.id}
                item={item}
                handleStartQuiz={handleStartQuiz}
                />)
            }
        </div>
    </div>
  )
}

export default StartQuiz
