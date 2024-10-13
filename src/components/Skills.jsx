import React from 'react';

const Skills = () => {
  
  const skills = [
    { name: 'HTML', level: 1 },
    { name: 'CSS', level: 0.75 },
    { name: 'JavaScript', level: 0.8},
    { name: 'React', level: 0.9 },
    { name: 'Node.js', level: 0.7},
    { name: 'Mongodb', level: 0.6 },
    { name: 'Redux', level: 0.6 },
    { name: 'Git', level: 0.7 },
    { name: 'Tailwind CSS', level: 0.8 }
  ];

  return (
    <div className='flex flex-col justify-center items-center h-full bg-gradient-to-r from-homic to-black text-white'>
      <h1 className='text-4xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-center'>
        Skills
      </h1>

      <div className='w-3/4 max-w-[900px] p-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          {skills.map((skill, index) => (
            <div key={index} className='flex flex-col items-center'>
              <div className='relative w-32 h-32'>
                <div className='absolute inset-0 rounded-lg border-4 border-gray-400'></div>              
                <div
                  className='absolute inset-0 rounded-lg'
                  style={{
                    background: `conic-gradient(from 0deg, rgba(253,187,45,1) ${skill.level * 100}%, rgba(255,255,255,0.1) ${skill.level * 100}%)`
                  }}
                ></div>
                <div className='absolute inset-0 rounded-lg bg-clip-padding bg-gradient-to-r from-primary to-secondary opacity-50'></div>
              </div>
              <p className='mt-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
