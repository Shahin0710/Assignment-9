import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import PageNotFound from './components/PageNotFound/PageNotFound';
import SingleQuiz from './components/SingleQuiz/SingleQuiz';
import Statistic from './components/Statistic/Statistic';
import Topic from './components/Topic/Topic';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Topic />} /> 
        <Route path="/statistic" element={<Statistic />} /> 
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/single_quiz" element={<SingleQuiz />} /> 
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
