import React from 'react';
import CV from '../../../assets/Ella_CV.pdf';
import './About.css';

const About = () => {

  return (
    <div className='homepage about base-grid'>
      <div className='base-container'>
        <div></div>
        <div className='content'>
          <p>
            I'm Ella, a software developer currently living in East London.
            I have Master's degrees in Liberal Arts with Philosophy and
            in Computer Science. In my free time I love to practice yoga, tend to
            my ever-expanding collection of house plants and cook with my friends. 
          </p>
          <p>
            Professionally, I have worked as a backend
            developer for Goldman Sachs, working with large,
            microservices-based web services. In this role I focused on 
            Kubernetes and Site Reliability Engineering, while also using 
            AWS, Terraform, Elasticsearch, Kafka and more. I also recently 
            completed Meta's Frontend Developer Professional Certificate, 
            and have built this website using React.js and JavaScript to 
            showcase what I learned. 
          </p>
          <p>
            I warmly invite you to reach out to me via any of the contact
            links provided in the header, or using the contact details listed in the 
            footer.
          </p>

          <a href={CV} download="EllaCV" target="_blank" rel="noreferrer">
            <button className='btn'>Download CV.pdf</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;