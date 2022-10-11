import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Bar, BarChart, XAxis, YAxis,Tooltip } from 'recharts';


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
                    // console.log(totalQuiz);
                    // console.log(quizStat);
                })
                console.log(quizStat);

                setStat(quizStat)
            })
    }, [])

    
    return (
        <div  className='flex justify-center mt-52 pb-72 duration-300'>
            
            <BarChart width={400} height={400} data={stat}>
                <Bar dataKey="Quiz" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis dataKey="Quiz"/>
                <Tooltip></Tooltip>
            </BarChart>
            

        </div>
    );
};

export default Statistics;