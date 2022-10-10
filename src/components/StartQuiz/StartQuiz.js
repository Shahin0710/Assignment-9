import React, { useEffect, useState } from 'react';
import QuizItem from '../Item/QuizItem';
import './StartQuiz.css';

const StartQuiz = () => {

    const [quiz, setQuiz] = useState([]);

    useEffect( () =>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res=> res.json())
        .then(data => setQuiz(data.data))
    }, []);

  return (
    <div className='quiz'>
        <h1 className='my-5'>Start Quiz</h1>
        <div className="quiz-container">
            {
                quiz.map(item=><QuizItem 
                    key={item.id}
                    item={item}
                    />)
            }
        </div>
    </div>
  )
}

export default StartQuiz
