import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import MathVid from '../src/MathVid.mp4';
import Rocket from '../src/Rocket.png';
import MathImg from '../src/Math.jpg';
import Fractal from '../src/fractal.jpg';
import Equations from '../src/Equations.png';
import Drik from '../src/drik.jpg';
import './App.scss';

const Home = () => {

    const { ref: heroRef, inView: heroVis } = useInView()
    const { ref: visionRef, inView: visionVis } = useInView({
        triggerOnce: true
    });

    const { ref: joinRef, inView: joinVis } = useInView({
        triggerOnce: true
    })

    const { ref: contributeRef, inView: contributeVis } = useInView({
        triggerOnce: true
    })

    return (
        <div className='home'>
            <section className='video-section'>
                <video muted loop autoPlay>
                    <source src={MathVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='video-overlay'>
                    <h1 className={`header-message ${heroVis ? 'fade' : ''}`} ref={heroRef}>Welcome To MaCPrA</h1>
                </div>
            </section>
            <section className='welcome'>
                <div className="welcome-content">
                    <div className="image">
                        <img src={Rocket} alt="Image" />
                    </div>
                    <div className={`text ${visionVis ? 'fade' : ''}`} ref={visionRef}>
                        <h2>Welcome</h2>
                        <p>Mathematics Credit Prep Academy (MaCPrA) welcomes a small select group of only gifted and talented (or K-Level) current 7th graders from Cypress and around for intensive study in mathematics acceleration to achieve Algebra 1 High School Credit by Exam (CBE) over Summer 2024 (June) while still in middle school.

                        This first-ever “peer-to-peer” math coaching program (coached by another 7th grader who had successfully passed multiple CBE including Algebra 1 while in 6th grade) advances the education of academically motivated, intellectually curious, GT and K-level 7th graders.
</p>
                    </div>
                </div>
            </section>
            <section className="why-cbe">
                <div className="why-cbe-content">
                    <div className="image">
                        <img src={MathImg} alt="Image" />
                    </div>
                    <div className={`text ${joinVis ? 'fade' : ''}`} ref={joinRef}>
                        <h2>Why Algebra 1 CBE? </h2>
                        <p>Algebra 1 Credit by Exam (CBE) for Acceleration provides an opportunity to earn grade level or course credit in which no prior formal instruction in class was completed. It is recommended that Algebra 1 Credit by Exam is attempted by only a very small percentage of 7th graders who have an academic and emotional need to advance to the next grade level.
                        Completing Algebra 1 CBE prior to entering 8th grade unlocks some serious academic advantages:                     
 </p>
                        <ul>
                            <li className={`helpList ${joinVis ? 'fade' : ''}`} ref={joinRef}>If passed (80 is the passing grade), the student can take Geometry in 8th grade and consequently accumulate 2 high school math credits while in middle school </li>
                            <li className={`helpList ${joinVis ? 'fade' : ''}`} ref={joinRef}>This in turn unlocks the time slot and possibility to take Calculus in their Junior Year of High School (11th Grade) that is often one of the higher math subjects recommended by elite colleges in their admissions criteria.</li>
                            <li className={`helpList ${joinVis ? 'fade' : ''}`} ref={joinRef}>For the truly academically motivated student, taking Calculus in Junior year leaves another math slot open in their senior year (12th grade) and the student may choose to take Statistics or Multivariable Calculus in their Senior year which shows a rigorous math course load to selective colleges. </li>
                            <li className={`helpList ${joinVis ? 'fade' : ''}`} ref={joinRef}>Taking Calculus (or AP Calculus) and Multivariable Calculus in school for free might save almost $5000 in college tuition had these courses had to be taken in a 4 year undergraduate college program (assuming the college has established course equivalency)</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='what-to-do'>
              <div className="what-to-do-content">
                  <div className="image">
                      <img src={Fractal} alt="Image" />
                  </div>
                  <div className={`text ${visionVis ? 'fade' : ''}`} ref={visionRef}>
                      <h2>What Do I Do?</h2>
                      <p>You should start the ball rolling early in order to secure a CBE test slot in 2024 summer. Talk to your middle school counselor for enrollment deadlines and other details. This often is NOT circulated or published broadly by the schools and you have to proactively initiate the conversation. 
            </p>
                  </div>
              </div>
            </section>
            <section className="info">
              <div className="info-content">
                  <div className="image">
                      <img src={Equations} alt="Image" />
                  </div>
                  <div className={`text ${joinVis ? 'fade' : ''}`} ref={joinRef}>
                      <h2>Program Information </h2>
                      <p>2024 Algebra 1 CBE Prep Program Details:
                        Online Classes start from February 2024
                        Once a week online class;
                        Two options: Friday evening OR Saturday morning
                        Each Session is of 40 minutes ($20 per session);
                        After the below 12 sessions, students can consult me for free regarding a STAAR test problem of Algebra 1 before their CBE exam in Summer 2024.
                     
            </p>
                      <ul>
                        <li>Values and Simplification of Algebraic Expressions</li>
                        <li>Solving equations with 1 variables including word problems</li>
                        <li>Writing and graphing linear simultaneous equations (different forms)</li>
                        <li>Transformation in linear function, linear relationships and Correlation</li>
                        <li>Solving systems of linear equations by graphing, by substitution, by using Gaussian elimination method</li>
                        <li>Linear inequalities in 2 variables</li>
                        <li>Exponents and Exponential Functions including exponential growth and decay; writing exponential equations and analyzing regression</li>
                        <li>Arithmetic Progression and Geometric Progression Sequenes and series</li>
                        <li>Addition, subtraction, multiplication, division and factorization of polynomials and Quadratic Trinomials</li>
                        <li>Graphing and writing Quadratic functions in the standard and Vertex form</li>
                        <li>Solving Quadratic equations by using square roots, by completing the square and with the Quadratic formula</li>
                        <li>Solving past years’ STAAR test papers for Algebra 1</li>
                      </ul>
                  </div>
              </div>
            </section>
            <section className='about'>
              <div className="about-content">
                  <div className="image">
                      <img src={Drik} alt="Image" />
                  </div>
                  <div className={`text ${visionVis ? 'fade' : ''}`} ref={visionRef}>
                      <h2>About The Coach</h2>
                      <p>Hi there! I am a 7th grader at Hamilton Middle in Cy Fair ISD and an entrepreneur and software developer. 
                        I have a tremendous passion for science and math. I’ve completed high school level Algebra 1 after my 6th grade and currently taking high school level Geometry in my 7th grade. I am  poised to take Algebra 2 in my 8th grade and continue my journey with Precalculus and other higher level Calculus in high school. 
                        I feel I will be a better coach for my peers in 7th grade (as opposed to experienced adult math teachers) because I have gone through this CBE first hand and can explain Algebra 1 concepts in a way that will resonate with my fellow 7th graders. 
                        As a software programmer, I love programming in React, Python and other languages and have developed products for Tagore society (a 501(c)(3) non profit org) as well as for Grand Staff Society that promotes learning and performance of Nobel Laureate R.N Tagore’s songs and also hosts many  youth ensembles in other genres of Indian music. 
                        In my free time, I love playing and practicing violin. I have been successfully placed in Region Orchestra this year and have also completed Level 2 program requirements of Royal Conservatory of Music (RCM). 
                        I enjoy practicing Taekwondo and aspire to play competitively to win a Black Belt. I also play water polo and look forward to participating in Junior Olympics in the future. Contact me at dragon.screech76@gmail.com or text 8053045859.

            </p>
                  </div>
              </div>
            </section>
            
        </div>
    );
};

export default Home;
