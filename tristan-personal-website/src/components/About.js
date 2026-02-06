// HomePage.js - Home page component
import React from 'react';
import { router } from '../routes.js';
import photo1 from './icons/about1.jpg';

const AboutPage = () => {
  const handleNavigation = (routeName) => {
    router.navigate(routeName);
  };

  return (
    <div className="min-h-screen bg-light-wisteria-50 dark:bg-pale-slate-950 text-light-wisteria-600 dark:text-light-wisteria-400 transition-colors">
      <div className="container mx-auto px-8 sm:px-6 md:px-4 py-8">
        <div className="max-w-4xl mx-auto">

          <div className="flex justify-flex-start flex-col mt-16">
            <h1 className="text-6xl font-heading mb-8">
              About Me
            </h1>

            <p className="text-xl font-sans mb-16">
                I am a highly motivated Mechanical Engineering (Mechatronics) student at The University of Adelaide, 
                currently working for GRolls. My experience spans mechanical design, automation, and robotics, 
                with proven success leading projects such as rover development, autonomous systems, and competitive 
                robotics. I bring strong technical expertise in CAD, motor integration, and control systems, 
                combined with a collaborative mindset and problem-solving skills. At GRolls, I contribute to 
                the innovative milling machine aiding in the company's vision for sustainability and the 
                commercialisation of the GRolls machine. 
            </p>

            <img src={photo1} alt='Lab Research' className="rounded-sm object-cover hidden md:block mb-16"/>

            <div className="flex flex-row justify-between mb-10">
              <div>
                <p className="text-3xl font-heading mb-4">
                  Hobbies & Interests
                </p>
                <p className="text-xl font-sans mb-10 mr-6">
                  I enjoy bouldering, 3D printing, and travel. I have traveled to Japan twice and South Korea, and am excited to see more of the world.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;