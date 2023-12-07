import React from 'react';
import './ExperienceEntries.css';

const VolunteerStar = () => {
  return (
    <div className='experience-entry base-grid' id='star'>
      <div className='base-container-narrow'>
        <h1>Teacher at Homework Club</h1>

        <p>
          Student Action For Refugees {`(STAR)`} is a national 
          network of students that helps support refugees in the UK 
          and promote empathy within society. Their work involves:
          working directly with refugees; campaigning for policy change 
          and equal access to higher education for refugees; and learning 
          about refugee protection and the asylum journey in the UK. 
        </p>

        <h2>The Role</h2>

        <p>
          Every Wednesday and Sunday afternoon throughout my first
          year of university, I travelled to the Barton Hill Settlement 
          where I mentored pupils from age 7 to age 17, mostly helping 
          with their school homeowork.   
        </p>

        <p>
          My first experience of teaching others, I learnt the importance of
          gauging the pupils' ability levels and taking account of their age group,
          in order to tailor my explanations appropriately.
          I came to appreciate the importance of preparing a backup lesson plan in advance. 
          Finally, even the mere fact of having to travel to the other side of Bristol 
          for this homework club helped positively expand my horizons beyond the student bubble. 
        </p>

        <h3 className='italic'>Learn more about STAR on <a href="https://star-network.org.uk/">the website</a></h3>

      </div>
    </div>
  )
}

export default VolunteerStar;