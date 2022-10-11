import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Statistic.css';

const Statistic = () => {
    const [quiz, setQuiz] = useState([]);

    useEffect( () =>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res=> res.json())
        .then(data => setQuiz(data.data))
    }, []);

  return (
    <div className='statistic'>
        <Header />
        <h1 className='my-5'>
            Statistic
        </h1>
            <ResponsiveContainer width="100%" height="100%" aspect={3}>
                <AreaChart
                    width="100%"
                    height="100%"
                    data={quiz}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
             <div className='footer'>
                <Footer />
            </div>
    </div>
  )
}

export default Statistic;