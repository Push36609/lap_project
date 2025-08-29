import React from 'react';
import Intro from './Intro';
import Hero from './Hero';
import InFo from './InFo';
import CurrentmemberSlider from './CurrentmemberSlider';
import AlumniSlider from './AlumniSlider';
import InternSlider from './InternSlider';
import ImageSlider from './ImageSlider';
import Footer from './Footer';




function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-50 to-cyan-100">
      <Hero />
      <Intro />
      <p className="bg-gradient-to-r from-red-50 to-purple-100 border-2 border-black rounded-2xl py-5 px-6 my-8 mx-auto max-w-262 font-sans text-base leading-6 text-gray-900 shadow-[0px 4px 12px rgba(142, 68, 173, 0.2)] transition-transform duration-300 ease-in-out
                    hover:scale-105 hover:shadow-lg hover:border-blue-300">
        <strong className='inline-block text-black text-base font-bold py-1.5 px-3 rounded-[6px 6px 6px 0] mb-3'>Bio-computational Lab</strong> is an interdisciplinary research hub at Jawaharlal Nehru University (JNU) 
        led by Dr. Saurabh Kumar Sharma. The lab is dedicated to exploring the frontiers of Machine Learning (ML)
        and Artificial Intelligence (AI) in understanding complex biological and neurological systems.
        By integrating computational modeling, neural networks, and data-driven approaches, the lab focuses on decoding
        brain functions, neural communication, and systems biology. With a strong emphasis on mathematical modeling,
        network theory, and big data analytics, the lab aims to bridge the gap between biology and computation.
        Research at the Bio-computational Lab supports the development of predictive tools and intelligent systems 
        for solving real-world biological challenges, fostering innovation in computational biology, neuroscience, and AI-driven diagnostics.
      </p>
      <InFo />
      <CurrentmemberSlider />
      <AlumniSlider />
      <InternSlider />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default Home;
