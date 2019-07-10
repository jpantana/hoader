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

  getStuff = () => {
    mystuffData.getMyStuff()
      .then((myStuff) => {
        this.setState({ myStuff });
      })
      .catch(err => console.error('no stuff for you', err));
  };

  componentDidMount() {
    this.getStuff();
  }

  deleteItem = (itemId) => {
    mystuffData.deleteStuff(itemId)
      .then(() => this.getStuff())
      .catch(err => console.error('nothing deleted', err));
  };

  render() {
    const { myStuff } = this.state;
    const makeStuff = myStuff.map(item => (
      <Item
        key={ item.id }
        item={ item }
        deleteItem={this.deleteItem}
      />
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
