import React from 'react';
import { Link } from 'react-router-dom';

// import mystuffShape from '../../helpers/propz/mystuffShape';

import './Home.scss';

class Home extends React.Component {
  state = {
    myStuff: {},
  }

  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/edit/${orderId}`);
  };

  render() {
    const singleLink = '/stuff/12345'; // ${scat.id} for example
    return (
      <div className="Home">
        <h1>Home</h1>
        <button className="btn btn-primary" onClick={this.editEvent}>Edit</button>
        <Link to={singleLink}>View Single</Link>
      </div>
    );
  }
}

export default Home;
