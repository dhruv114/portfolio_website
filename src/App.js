import React from 'react';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const experiences = [
    {
      date: 'June 2024 - Present',
      title: 'Process Engineering Intern',
      company: 'UCSB NanoFabrication Labratory',
      description: [
        'Operate multiple dry etch and lithorgraphy machines in the cleanroom environment',
        'Analyze and model dry etch machine emission spectra using Excel and Python (pandas), delivering data-driven insights to improve fabrication processes. ',
        'Collaborate with cross-functional teams and worked independently to test microchips. ',
      ]
    },
    {
      date: 'October 2023 - Present',
      title: 'Venue and Technology Executive',
      company: 'UCSB Dhadkan',
      description: [
        'Organized community-focused event with over $15,000 of proceeds donated to South Asian charities, fostering cultural engagement and philanthrophy.',
        'Directed venue selection and secured optimal spaces for both main and post-show.',
        'Coordinated sound and lighting logistics, ensuring seamless transitions and high-quality production for multiple dance team performances.',
      ]
    },
    {
      date: 'June 2022 - August 2022',
      title: 'Data Analyst Intern',
      company: 'Zimetrics Technologies Private Limited',
      description: [
        'Studied Data Science and Computer Science topics, learning essential Python, machine learning, and deep learning concepts',
        'Designed and implemented a data pipeline to efficiently process and manage datasets',
        'Developed and trained a machine learning model to predict the likelihood of strokes.',
      ]
    },
  ];

  return (
    <div className="App">
      <div className={darkMode ? 'dark' : ''}>
        <head> 
          <title>My Portfolio</title>
        </head>
        <main className='bg-white-px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
          <section>
            <nav className='py-10 md-2 flex justify-end dark:text-white'>
              <ul>
                <li>
                  <a 
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md transition '
                  href='/ResumeFinal.pdf'
                  target='_blank'
                  rel='noopener noreferrer'>
                    Resume
                  </a>
                </li>
              </ul>
            </nav>

            <div className='text-5xl py-10'>
              <h2 className='text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
                Dhruv Patel
              </h2>
              <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>
                Developer and dedicated student. 
              </h3>

              <div className = 'max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-8 mt-2'>
                <div className='md:w-1/3 flex justify-center'>
                  <img 
                  src = '/profile.jpeg'
                  alt='Dhruv Patel'
                  className='w-40 h-40 md:w-52 md:h-52 rounded-full shadow-lg object-cover' />
                </div>
                <div className='md:w-2/3 my-2 text-center md:text-left'>
                    <h2 className='text-3xl font-bold text-teal-600 mb-4'>About Me</h2>
                    <p className='text-gray-400 text-sm leading-relaxed'>
                      Hi! I'm Dhruv Patel, a passionate student and developer specializing in software
                      development and the intersection of computer science and medicine. 
                    </p>
                    <p className='mt-4 text-gray-400 text-sm leading-relaxed'>
                      With a background in C++, Python, React, I thrive or turning ideas into reality using
                      the latest technologies. When I'm not doing work, I love reading fantasy, researching new fashion
                      trends and playing old Pokemon games.
                    </p>
                </div>
              </div>
            </div>
          </section>
          <section className = 'py-12 bg-gray-500 rounded-lg '> 
              <h3 className='text-4xl text-teal-400 font-medium text-center mb-8'>Experience</h3>
              <div className='max-w-6xl px-3 mx-auto'>
                    {experiences.map((exp,index) => (
                      <div
                      key = {index}
                      className='flex flex-col sm:flex-row w-full items-start sm:items-center gap-1 mb-4'
                      >
                        {/* Date */}
                        <div className='sm:w-1/4 text-gray-200 w-screen px-3 py-6  text-md sm:text-right'>
                        {exp.date}
                        </div>
                        {/* Details */}
                        <div className='sm:w-3/4 bg-white shadow-lg rounded-lg p-4'>
                        <h3 className='text-xl font-semibold'>{exp.title}</h3>
                        <p className='text-sm text-gray-500'> {exp.company} </p>
                        <ul className='text-gray-700 mt-2 list-disc list-inside space-y-1'>
                          {exp.description.map((line, i) => (
                            <li key={i}>{line}</li>
                          ))}
                        </ul>
                        </div>
                        </div>
                    ))}
              </div>
          </section>
        </main>
      </div>
      {/* <NavBar />
      <Hero />
      <Analytics /> */}
    </div>
  );
}

export default App;
