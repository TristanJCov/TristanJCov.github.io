// HomePage.js - Home page component
import React from 'react';
import headshot from './icons/headshot1.jpg';
import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg';
import { ReactComponent as MailIcon } from './icons/mail.svg';
import { router } from '../routes.js';
import { LinkedInEmbed } from 'react-social-media-embed';

const HomePage = () => {
    const handleNavigation = (routeName) => {
      router.navigate(routeName);
    };

  return (
    <div className="min-h-screen bg-light-wisteria-50 dark:bg-pale-slate-950 text-light-wisteria-600 dark:text-light-wisteria-400 transition-colors">
      <div className="container mx-auto px-8 sm:px-6 md:px-4 py-8">
        <div className="max-w-4xl mx-auto">

          <div className="flex flex-col md:flex-row items-center justify-center gap-y-8 gap-x-20 mb-8 mt-8">

            {/* headshot */}
            <div class="rounded-full p-[2px] bg-gradient-to-b from-light-wisteria-300 to-light-wisteria-600">
              <img src={headshot} alt='headshot' className="w-60 rounded-full object-cover"/>
            </div>

            {/* name and desc */}
            <div className="text-center md:text-left flex flex-col justify-center">
              <h1 className="text-6xl font-heading mb-4">
                Tristan Coventry
              </h1>
              <p className="text-3xl font-serif mb-4">
                Mechanical Engineering Consultant
              </p>

              <div className="flex items-center space-x-4 md:self-start self-center">
                <a href="https://www.linkedin.com/in/tristancoventry/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="fill-current light-wisteria-600 dark:light-wisteria-400 w-6 h-6" />
                </a>  
                <a href="mailto:tris.j.covo@gmail.com" target="_blank" rel="noopener noreferrer">
                  <MailIcon className="fill-current light-wisteria-600 dark:light-wisteria-400 w-6 h-6" />
                </a>
              </div>

            </div>
          </div>

          <div className="text-left mb-12 mt-12">
              <p className="text-xl font-sans mb-8">
                Bachelor of Mechanical Engineering (Honours) student at the University of Adelaide <br/>
                Engineering Consultant Intern at GRolls
              </p>
          </div>

          <h2 className="text-4xl font-heading mb-4">
              Latest updates 
          </h2>

          <div className="flex flex-col md:flex-row justify-center md:justify-between gap-4 md:gap-8">
            <div className="mb-12" style={{ display: 'flex', justifyContent: 'center' }}>
              <LinkedInEmbed 
                url="https://www.linkedin.com/embed/feed/update/urn:li:share:7386977853512302593?collapsed=1"
                width="100%"
                height={400} 
              />
            </div>

            <div className="mb-12" style={{ display: 'flex', justifyContent: 'center' }}>
              <LinkedInEmbed 
                url="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7370659917118103552?collapsed=1"
                width="100%"
                height={400} 
              />
            </div>

            <div className="mb-12" style={{ display: 'flex', justifyContent: 'center' }}>
              <LinkedInEmbed 
                url="https://www.linkedin.com/embed/feed/update/urn:li:share:7348956195912638464?collapsed=1"
                width="100%"
                height={400} 
              />
            </div>
          </div>

          <h2 className="text-4xl font-heading mb-4">
              Want to learn more? 
          </h2>

          <div className="text-left mb-12">
            <p className="text-xl font-sans mb-8">
              Check out my    
              <span onClick={() => handleNavigation('about')} className="text-light-wisteria-600 dark:text-light-wisteria-400 cursor-pointer hover:text-light-wisteria-400 dark:hover:text-light-wisteria-600 font-bold"> about </span> section
              or 
              <span onClick={() => handleNavigation('about')} className="text-light-wisteria-600 dark:text-light-wisteria-400 cursor-pointer hover:text-light-wisteria-400 dark:hover:text-light-wisteria-600 font-bold"> CV</span>.
              Looking to get in touch? Contact me on 
              <a href="https://www.linkedin.com/in/tristancoventry/" target="_blank" rel="noopener noreferrer" className="text-light-wisteria-600 dark:text-light-wisteria-400 cursor-pointer hover:text-light-wisteria-400 dark:hover:text-light-wisteria-600 font-bold"> LinkedIn </a>
              or via my
              <a href="mailto:tris.j.covo@gmail.com" target="_blank" rel="noopener noreferrer" className="text-light-wisteria-600 dark:text-light-wisteria-400 cursor-pointer hover:text-light-wisteria-400 dark:hover:text-light-wisteria-600 font-bold"> email</a>
            </p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;