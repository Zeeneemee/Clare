import React, { useEffect, useState } from 'react';
import ScoreCard from '../components/tracking/scoreCard'; 
import { motion, AnimatePresence } from 'framer-motion';
import ProductsCon from '../components/tracking/productsCon';
import Pagination from '../components/ui/pagination';
import { Link } from 'react-router-dom';


const SkinTracking = () => {
    const [user, setUser] = useState({});
    const [score, setScore] = useState({});
    const [activeTab, setActiveTab] = useState('suggested');
    
    useEffect(() => {
        const darkspotConf = localStorage.getItem('darkspotConf') || '';
        const acneConf = localStorage.getItem('acneConf') || '';
        const scarConf = localStorage.getItem('scarConf') || '';
    
        const darkspotSpots = darkspotConf ? darkspotConf.split(',').length : 0;
        const acneSpots = acneConf ? acneConf.split(',').length : 0;
        const scarSpots = scarConf ? scarConf.split(',').length : 0;
        const wrinklePercentage = localStorage.getItem('wrinklePercentage') || 0;
        const acneScore = localStorage.getItem('acneScore') || 0;
        const darkCircleScore = localStorage.getItem('undereyeScore') || 0;
        const darkSpotScore = localStorage.getItem('darkspotScore') || 0;
        const scarScore = localStorage.getItem('scarScore') || 0;
        const wrinkleScore = localStorage.getItem('wrinklesScore') || 0;
        const users = JSON.parse(localStorage.getItem('user'));
    
        setScore({
            darkspotSpots,
            acneSpots,
            scarSpots,
            wrinklePercentage,
            acneScore,
            darkCircleScore,
            darkSpotScore,
            scarScore,
            wrinkleScore
        });
    
        if (users) {
            setUser(users);
        }
    
        // Optionally clear storage here if you need
    }, []);
    
    useEffect(() => {
        console.log(user);
    }, [user]);
    
    
    return (
        <article>
            <motion.div
                className="flex flex-col mt-24 pb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
                {/* greeting container */}
                <div className='flex flex-col justify-start ml-[10%] '>
                    <h2 className='font-lato font-semibold text-[18px]'>
                        Good Morning, {user ? user.name : 'Guest'}
                    </h2>
                    <p className='font-lato font-semibold text-[#BEBEBE] text-[18px]'>Track your Skin & Stay Updated</p>
                </div>
                <div className='flex flex-col items-center '>
                    {/* Score Container */}
                    <div className='grid grid-cols-2 gap-4 mt-6 w-[90%] '>
                        <ScoreCard title="Acne" score={score.acneScore} spots={score.acneSpots} />
                        <ScoreCard title="Dark Circles" score={score.darkCircleScore}  />
                        <ScoreCard title="Dark Spots" score={score.darkSpotScore} spots={score.darkspotSpots} />
                        <ScoreCard title="Scar" score={score.scarScore} spots={score.scarSpots} />
                    </div>
                    <div className='grid grid-cols-1 gap-4 mt-4 w-[90%] '>
                        <ScoreCard title="Wrinkles" score={score.wrinkleScore} spots={score.wrinklePercentage} />
                    </div>

                    {/* Tabs */}
                    <div className='flex items-center gap-8 mt-6 border-b border-[#EAEAEA]'>
                        <button
                            onClick={() => setActiveTab('suggested')}
                            className={`relative pb-2 font-lato font-semibold text-[16px] transition-colors duration-300 ${
                                activeTab === 'suggested' ? 'text-[#222E3D]' : 'text-[#BEBEBE]'
                            }`}
                        >
                            Suggested Products
                            <motion.span
                                layoutId="underline"
                                className={`absolute left-0 bottom-0 h-[2px] w-full ${
                                    activeTab === 'suggested' ? 'bg-[#222E3D]' : ''
                                }`}
                                transition={{ duration: 0.3 }}
                            />
                        </button>
                        <button
                            onClick={() => setActiveTab('purchased')}
                            className={`relative pb-2 font-lato font-semibold text-[16px] transition-colors duration-300 ${
                                activeTab === 'purchased' ? 'text-[#222E3D]' : 'text-[#BEBEBE]'
                            }`}
                        >
                            Purchased Products
                            <motion.span
                                layoutId="underline"
                                className={`absolute left-0 bottom-0 h-[2px] w-full ${
                                    activeTab === 'purchased' ? 'bg-[#222E3D]' : ''
                                }`}
                                transition={{ duration: 0.3 }}
                            />
                        </button>
                    </div>

                    {/* products section with fade animation */}
                    <div className='mt-4 border border-[#EAEAEA] rounded-[24px] p-4 w-[90%] min-h-[100px]'>
                        <AnimatePresence mode="wait">
                            {activeTab === 'suggested' ? (
                                <motion.div
                                    key="suggested"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProductsCon />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="purchased"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className='flex flex-col items-center justify-center h-full'
                                >
                                    <p className="text-[12px] font-semibold text-[#B1B1B1]">Your purchased products will appear here.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
        <div className="flex justify-center mt-8 md:mt-10 gap-4 sm:gap-6 md:gap-0 md:space-x-6">
            <Link
            to="/signup"
            className="font-lato font-light text-sm px-8 sm:px-14 md:px-10 py-2 md:py-3 border border-black text-black rounded-full hover:bg-gray-100 transition"
            >
            Back
            </Link>
            <Link
            to="/"
            className={`font-lato font-light text-sm px-8 sm:px-14 md:px-10 py-2 md:py-3 rounded-full transition bg-[#14213D] text-white hover:opacity-80"
            }`}
            >
            Return Home
            </Link>
            </div>
        <div className="flex justify-center gap-3 md:gap-3 mt-4">
            <Pagination current={4} />
        </div>
            </motion.div>
        </article>
    );
};

export default SkinTracking;
