import React from 'react';
import PropTypes from 'prop-types';

import mystuffData from '../../helpers/data/mystuffData';
import Item from '../Item/Item';

import './MyStuff.scss';
import mystuffShape from '../../helpers/propz/mystuffShape';

class MyStuff extends React.Component {
  static propTypes = {
    myStuff: PropTypes.arrayOf(mystuffShape.mystuffShape),
  }

  state = {
    myStuff: [],
  }

  componentWillMount() {
    mystuffData.getMyStuff()
      .then((myStuff) => {
        this.setState({ myStuff });
      })
      .catch(err => console.error('no stuff for you', err));
  }

  render() {
    const { myStuff } = this.state;
    const makeStuff = myStuff.map(thing => (
      <Item key={ thing.id } thing={ thing } />
    ));
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        { makeStuff }
      </div>
    );
  }
}

export default MyStuff;
