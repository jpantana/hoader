import React from 'react';
// import { Link } from 'react-router-dom';

// import mystuffShape from '../../helpers/propz/mystuffShape';

import './Home.scss';

class Home extends React.Component {
  state = {
    myStuff: [],
  }

  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/edit/${orderId}`);
  };

  render() {
    // const singleLink = '/stuff/12345'; // ${scat.id} for example
    return (
      <div className="Home">
        <h1 className="homeH1">Home</h1>
        <img src="http://nashvillejunkremovalservice.com/wp-content/uploads/2016/05/632x305_clutter.jpg" alt="bunch of junk" />
      {/* <button className="btn btn-primary editButton" onClick={this.editEvent}>Edit</button> */}
        {/* <Link to={singleLink} className="Link">View Single</Link> */}
        <p className="homeDescrip">Stuff has always been a passion of mine. The quality or condition of said stuff is not the point. The point is stuff. That I have it. That I keep having it. Only then... Only then will I be able to rest.</p>
      </div>
    );
  }
}

export default Home;
