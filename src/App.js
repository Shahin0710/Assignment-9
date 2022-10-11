// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Statistic from './components/Statistic/Statistic';
import Topic from './components/Topic/Topic';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Topic />} /> 
        <Route path="/statistic" element={<Statistic />} /> 
        <Route path="/blog" element={<Blog />} /> 
      </Routes>
    </div>
  );
}

export default App;
