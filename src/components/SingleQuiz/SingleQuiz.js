import React, { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../../App';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import './SingleQuiz.css';

const SingleQuiz = () => {
  const [quizItem, setQuizItem] = useContext(QuizContext);
  const [quizData, setQuizData] = useState();


  useEffect( () =>{
       fetch(`https://openapi.programming-hero.com/api/quiz/${quizItem}`)
       .then(res=> res.json())
       .then(data => setQuizData(data.data))
  }, [quizItem]);

  return (
    <>
      <Header />
        <div className='single-quiz'>
          <h2 className='mt-5'>
            Quiz of <span className='quiz-name'>{quizData?.name}</span>
          </h2>

          <div>
            {
            quizData?.questions?.map(item=><QuizQuestion
                key={item.id}
                item={item}
                />)
            }
          </div> 
        </div>
      <Footer />
    </>
  )
}

export default SingleQuiz;
