// HomePage.js - Home page component
import React from 'react';

const CvPage = () => {

  return (
    <div className="min-h-screen bg-light-wisteria-50 dark:bg-pale-slate-950 text-light-wisteria-600 dark:text-light-wisteria-400 transition-colors">
      <div className="container mx-auto px-8 sm:px-6 md:px-4 py-8">
        <div className="max-w-4xl mx-auto">

          <div className="flex justify-flex-start flex-col mt-16">
            <h1 className="text-6xl font-heading mb-8">
              Experience and Projects
            </h1>

            <p className="text-4xl font-heading mb-4"> Experience </p>

            <div className="mb-8 font-sans">
              <p className="text-2xl font-bold"> GRolls | Consultant Mechanical Engineer </p>
              <p className="text-xl italic mb-2"> June 2025 - Present </p>
              <p className="text-xl"> 
                • Aiding in the design and development of the GRolls machine for commercial use. 
              </p>
            </div>

            <div className="mb-8 font-sans">
              <p className="text-2xl font-bold"> YD. | Retail Stylist Assistant </p>
              <p className="text-xl italic mb-2"> April 2024 - June 2025 </p>
              <p className="text-xl"> 
                • Provided customer service, styled clothing and suits, daily opening and closing duties.
              </p>
            </div>

            <div className="mb-8 font-sans">
              <p className="text-2xl font-bold"> The Athletes Foot | Retail Sales Assistant </p>
              <p className="text-xl italic mb-2"> December 2022 - February 2025 </p>
              <p className="text-xl"> 
                • Aiding in the design and development of the GRolls machine for commercial use. 
              </p>
            </div>

            <div className="mb-8 font-sans">
              <p className="text-2xl font-bold"> UoA Computer Science Club | Committee Member </p>
              <p className="text-xl italic mb-2"> March - November 2025 </p>
              <p className="text-xl"> 
                • Organising and hosting events for the Computer Science Club of the University of Adelaide
              </p>
            </div>

            <p className="text-4xl font-heading mb-4"> Projects </p>

            <div className="mb-8 font-sans">
              <p className="text-2xl font-bold"> Rover Team </p>
              <p className="text-xl"> 
                • Led a team to determine optimal motors for rover components, ensuring seamless integration across all systems<br/>
                • Selected motors, controllers, and gearboxes for driving, steering, and end-effector functions, applying knowledge of torque, RPM, and gear ratios for performance optimization <br/>
                • Gained practical experience in mechanical systems design and integration, relevant to automation
              </p>
            </div>

            <div className="mb-8 font-sans">
              <p className="text-2xl font-bold"> Warman Competition </p>
              <p className="text-xl"> 
                • Collaborated in a 4-person team to design an autonomous robot for a course competition, with the goal of completing the course the fastest with no human input<br/>
                • Integrated a microcontroller with motors to execute pre-programmed movements, demonstrating automation and control systems knowledge <br/>
                • Applied problem-solving skills to optimise robot performance and achieve project goals
              </p>
            </div>

            <div className="mb-8 font-sans">
              <p className="text-2xl font-bold"> Battle Bots </p>
              <p className="text-xl"> 
                • Led the design and construction of a combat robot in collaboration with the Navy<br/>
                • Achieved first place in the competition through effective teamwork and design execution <br/>
                • Utilised CAD and 3D design skills to develop detailed mechanical designs and integrated electronic circuitry for motor control
              </p>
            </div>

            <div className="mb-8 font-sans">
              <p className="text-2xl font-bold"> Radiogram Personal Repair Project </p>
              <p className="text-xl"> 
                • Used my knowledge and ability to independently repair a 1940s radiogram, demonstrating self-directed learning and practical mechanical and electrical aptitude
              </p>
            </div>

            <p className="text-4xl font-heading mb-4"> Achievements </p>
            <div className="flex md:flex-row flex-col items-center">
              <div>
                <div className="mb-8 font-sans">
                  <p className="text-2xl font-bold"> Top Student of Engineering Classes </p>
                  <p className="text-xl"> 
                    Received awards for being top of class for AutoCAD, Mechatronic and Electronics classes.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CvPage;