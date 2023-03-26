import { useEffect, useState } from 'react';

export const useAIOpponent = turn => {
    const[aiChoice, setAIChoice] = useState('');

    useEffect(() => {
        if (turn === 1) {
            const options = ['attack', 'magic', 'heal'];
            // select random item from options array
            // randomly choose one from this options list and set as AI's choice 
            setAIChoice(options[Math.floor(Math.random() * options.length)]);
        }
    }, [turn]); 

    return aiChoice;
};