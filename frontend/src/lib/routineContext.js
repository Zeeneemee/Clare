import React, { createContext, useState,useEffect} from 'react';

// Create the context
export const RoutineContext = createContext();

// Provider component
export const RoutineProvider = ({ children }) => {
    const [morningRoutine, setMorningRoutine] = useState([]);
    const [nightRoutine, setNightRoutine] = useState([]);
    useEffect(() => {
        // Load data from localStorage when app starts
        const savedMorning = localStorage.getItem('morningRoutine');
        const savedNight = localStorage.getItem('nightRoutine');
        if (savedMorning) setMorningRoutine(JSON.parse(savedMorning));
        if (savedNight) setNightRoutine(JSON.parse(savedNight));
    }, []);
    
    useEffect(() => {
        // Save to localStorage whenever routines change
        if (morningRoutine.length > 0) {
            localStorage.setItem('morningRoutine', JSON.stringify(morningRoutine));
        }
    }, [morningRoutine]);
    
    useEffect(() => {
        if (nightRoutine.length > 0) {
            localStorage.setItem('nightRoutine', JSON.stringify(nightRoutine));
        }
    }, [nightRoutine]);
    

    return (
        <RoutineContext.Provider value={{ morningRoutine, setMorningRoutine, nightRoutine, setNightRoutine }}>
            {children}
        </RoutineContext.Provider>
    );
};
