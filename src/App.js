import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import PageNotFound from './components/PageNotFound/PageNotFound';
import SingleQuiz from './components/SingleQuiz/SingleQuiz';
import Statistic from './components/Statistic/Statistic';
import Topic from './components/Topic/Topic';

export const QuizContext = createContext();

function App() {
  const [quizItem, setQuizItem]  = useState()

  return (
    <QuizContext.Provider value={[quizItem, setQuizItem]}>
      <div>
        <Routes>
          <Route path="/" element={<Topic />} /> 
          <Route path="/statistic" element={<Statistic />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/single_quiz_id=:id" element={<SingleQuiz />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </QuizContext.Provider>
  );
}

export default App;
