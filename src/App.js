import React from 'react';
import './App.css';

const resumeData = {
  name: 'Mohammad Nauman',
  Skills: ['JavaScript', 'React', 'HTML', 'CSS'],
  education: [
    {
      school: 'Middlesex University',
      degree: 'Masters  of Science in Computer Science',
      year: '2023-24',
    },
  ],
  experience: [
    {
      company: 'Code Tech',
      position: 'Frontend Developer',
      year: 'April 22- August 2022',
    },
    {
      company: 'XYZ Inc.',
      position: 'Software Engineer',
      year: '2018-Present',
    },
  ],
};

const Skills = ({ skills }) => {
  return (
    <>
      <h2>Skills</h2>
      <div className="data">
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

const Education = ({ education }) => {
  return (
    <>
      <h2>Education</h2>
      <div className="data">
        <ul>
          {education.map((education, index) => (
            <li key={index}>{education.school} at {education.degree } ({education.year }) </li>
            
          ))}
        </ul>
      </div>
    </>
  );
};


const Experience = ({ experience}) => {
  return (
    <>
      <h2>Experience</h2>
      <div className="data">
        <ul>
          {experience.map((experience, index) => (
            <li key={index}>{experience.company} {experience.position} {experience.year}</li>
            
          ))}
        </ul>
      </div>
    </>
  );
};

const Resume = ({ resumeData }) => {
  return (
    <>
      <h2  style={{textAlign:'center'}}>{resumeData.name}</h2>
      <Skills skills={resumeData.Skills} />
      <Education education={resumeData.education} />
      <Experience  experience={resumeData.experience}/>

    </>
  );
};

function App() {
  return (
    <>
    <div className="stuff">
      <Resume resumeData={resumeData} />
      </div>
    </>
  );
}

export default App;