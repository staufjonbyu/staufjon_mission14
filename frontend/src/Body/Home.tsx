import React from 'react';
import './MyStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <div className="row">
        <h3>Welcome to My Website!</h3>
      </div>
      <div className="col">
        <img src="./JoelHiltonHeadshot.jpg" alt="companyLogo" />
      </div>
      <div className='col align-self-center test-start'>
        <h4>
          Here you can navigate between a list of hundreds of movies that I have
          collect and as a special treat there is a link my podcasts
        </h4>

      </div>
    </div>
  );
}

export default Home;
