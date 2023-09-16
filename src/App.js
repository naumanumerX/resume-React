import React from 'react';
import './App.css';

const resumeData = {
  name: 'Mohammad Nauman',
  Skills: ['JavaScript', 'React', 'HTML', 'CSS'],
  education: [
    {
      school: 'University of XYZ',
      degree: 'Bachelor of Science in Computer Science',
      year: '2010-2014',
    },
  ],
  experience: [
    {
      company: 'ABC Tech',
      position: 'Frontend Developer',
      year: '2014-2018',
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
      <Resume resumeData={resumeData} />
    </>
  );
}

export default App;