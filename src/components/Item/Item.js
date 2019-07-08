import React from 'react';

import PropTypes from 'prop-types';
import mystuffShape from '../../helpers/propz/mystuffShape';
import SingleItem from '../SingleItem/SingleItem';

class Item extends React.Component {
  static propTypes = {
    item: PropTypes.objectOf(mystuffShape.mystuffShape),
  }

  state = {
    isClicked: false,
    item: '',
  }

  render() {
    const { thing } = this.props;
    const singleItem = (e) => {
      console.error(e.target.id);
      e.preventDefault();
      this.setState({
        isClicked: !this.state.isClicked,
        item: this.props.thing,
      });
    };
    return (
      <div className="Item" onClick={ singleItem }>
        { (this.state.isClicked === true ? <SingleItem key={ thing.id } item= { this.state.item }/> : '') }
        <div className="col-12">
          <div className="card">
            <h3 id={ thing.id } className="card-header">{ thing.name }</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
