
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {

  const textRef = useRef();
 
 useEffect(() => {
   init(textRef.current, {
    showCursor: true,
    backSpeed:  60,
    backDelay:  1500,
    strings: ['Developer', 'Designer', 'Content creator' ] });
  },[]); 

  return (

    <div className="profile_container">
      <div className="profile-parent">
        <div className="profile-details-name">
          <span className="primary-text">Hello I'm Ashish 
            <h3 className='heading_a'>
              Freelance <span className="Text-typed" ref={textRef}> </span>
            </h3>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="pramary-text1">
            I am building apllications with frontend and backend operations
          </span>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
