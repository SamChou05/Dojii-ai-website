"use client"
import React, { useState } from 'react';

const Timeline = () => {
  const [visiblePanel, setVisiblePanel] = useState('panel1'); // Default to panel1 being visible

  const toggleInvisibility = (panelId: string) => {
    setVisiblePanel(panelId);
  };

  return (
    <div className='h-screen pt-80'>
      
      
      <div className='flex justify-center font-bold text-2xl'>
        Explore Dojii by choosing your timeline
      </div>
      <div className=' pt-10 flex justify-center items-center'>
        <div className='w-1/2 text-center text-gray-500 text-opacity-80'>
        Whether you are a day trader, swing trader, or a long term investor,
Dojii.ai has your back! Depending on your preferred timeline, Dojii’s
machine learning algorithm will cross examine with different patterns,
and data points with the goal to minimize potential losses and identify unseen opportunities in the market.

        </div>
    </div>
      <div className='flex justify-center space-x-32 pt-10'>
        <button
          className={`text-#001B3A font-semibold py-2 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out ${
            visiblePanel === 'panel1' ? 'bg-[rgb(30,84,67)] text-white' : 'bg-[rgb(97,196,164)] text-white'
          }`}
          onClick={() => toggleInvisibility('panel1')}
        >
          Short-term
        </button>
        <button
          className={` text-#001B3A font-semibold py-2 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out ${
            visiblePanel === 'panel2' ? 'bg-[rgb(30,84,67)] text-white' : 'bg-[rgb(97,196,164)] text-white'
          }`}
          onClick={() => toggleInvisibility('panel2')}
        >
          Medium-term
        </button>
        <button
          className={` text-#001B3A font-semibold py-2 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out ${
            visiblePanel === 'panel3' ? 'bg-[rgb(30,84,67)] text-white' : 'bg-[rgb(97,196,164)] text-white'
          }`}
          onClick={() => toggleInvisibility('panel3')}
        >
          Long-term
        </button>
      </div>
      <div id='panel1' style={{ display: visiblePanel === 'panel1' ? 'block' : 'none' }}>
        Panel 1
      </div>
      <div id='panel2' style={{ display: visiblePanel === 'panel2' ? 'block' : 'none' }}>
        Panel 2
      </div>
      <div id='panel3' style={{ display: visiblePanel === 'panel3' ? 'block' : 'none' }}>
        Panel 3
      </div>
    </div>
  );
};

export default Timeline;
