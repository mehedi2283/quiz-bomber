import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const [stat, setStat] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const loadedQuizStats = data.data.data;
                const quizStat = loadedQuizStats.map(quizStat => {
                    const totalQuiz = parseInt(quizStat.total);
                    const singleQuiz = {
                        name: quizStat.name,
                        Quiz: totalQuiz
                    }
                    return singleQuiz
                })
               

                setStat(quizStat)
            })
    }, [])

    
    return (
        <div  className='flex justify-center mt-12 pb-8 duration-300'>
            <ResponsiveContainer width="70%" height={580}>
            <BarChart  data={stat}>
                <Bar dataKey="Quiz" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis dataKey="Quiz"/>
                <Tooltip></Tooltip>
            </BarChart>
            
            </ResponsiveContainer>
            

        </div>
    );
};

export default Statistics;