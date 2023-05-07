import React from 'react';
import './onboarding.less';

export const OnBoarding = () => {
    const duration = 2;
    const delay = duration / 8;
    const animationName = 'identifier1';
    return (
        <>
            <div className='my-ai-boarding_container'>
                <div className='test' style={{ transform: 'rotate(-90deg)',background:'linear-gradient(45.56deg, #FF932F 21.45%, rgba(255, 113, 240, 0.28) 47.87%, #6045FF 87.96%)', animation: `${animationName} ${duration}s infinite linear ${delay * 3}s` }}></div>
                <div className='test' style={{ transform: 'rotate(-45deg)',background:'linear-gradient(55.58deg, #FF932F 17.01%, rgba(255, 113, 240, 0.28) 47.69%, #7558FF 90.25%)', animation: `${animationName} ${duration}s infinite linear ${delay * 2}s` }}></div>
                <div className='test' style={{ background:'linear-gradient(45.56deg, #FF932F 18.72%, rgba(255, 113, 240, 0.24) 48.58%, #6045FF 85.23%)', animation: `${animationName} ${duration}s infinite linear ${delay * 0}s` }}></div>
                <div className='test' style={{ transform: 'rotate(45deg)',background:'linear-gradient(235.58deg, #FF932F 7.12%, rgba(255, 113, 240, 0.34) 45.59%, rgba(117, 88, 255, 0.971961) 92.21%, #6045FF 92.22%)', animation: `${animationName} ${duration}s infinite linear ${delay * 1}s` }}></div>
                <div className="my-ai-boarding_white_blur"></div>
                <div className='my-ai-boarding_white'></div>
            </div>
            <div className='myAI'>my AI hahahaah</div>
        </>
        
    );
}