import React from 'react';

import PropTypes from 'prop-types';
import mystuffShape from '../../helpers/propz/mystuffShape';
import SingleItem from '../SingleItem/SingleItem';

import './Item.scss';

class Item extends React.Component {
  static propTypes = {
    item: PropTypes.objectOf(mystuffShape.mystuffShape),
    deleteItem: PropTypes.func.isRequired,
  }

  state = {
    isClicked: false,
    item: {},
  }

  render() {
    const { item } = this.props;
    const singleItem = (e) => {
      e.preventDefault();
      this.setState({
        isClicked: !this.state.isClicked,
        item: this.props.item,
      });
    };
    return (
      <div className="Item" onClick={ singleItem }>
        <div className="col nameWidth">
          <div className="card">
            <h3 id={ item.id } className="card-header">{ item.name }</h3>
          </div>
        </div>
        <div className="itemBreakout">{ (this.state.isClicked === true ? <SingleItem
          key={ item.id }
          item={ this.state.item }
          deleteItem={ this.props.deleteItem }
        /> : '') }</div>
      </div>
    );
  }
}

export default Item;
