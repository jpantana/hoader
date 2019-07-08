import React from 'react';

import PropTypes from 'prop-types';
import mystuffShape from '../../helpers/propz/mystuffShape';

import './SingleItem.scss';
import mystuffData from '../../helpers/data/mystuffData';

class SingleItem extends React.Component {
  static propTypes = {
    thing: PropTypes.arrayOf(mystuffShape.mystuffShape),
  }

  deleteEvent = (e) => {
    e.preventDefault();
    console.error(this.props.item.id);
    mystuffData.deleteStuff(this.props.item.id).then().catch(err => console.error('nothing deleted', err));
  };

  render() {
    const { item } = this.props;
    return (
      <div className="col-6">
        <div className="SingleItem card">
          <p className="itemName">{ item.name }</p>
          <p className="itemDescription">{ item.description }</p>
          <img className="itemImg" src={ item.imageUrl } alt="a thing about an antique" />
          <p className="itemPrice" >Price: { item.price }</p>
          <i className="far fa-edit"></i>
          <i onClick={ this.deleteEvent } className="far fa-trash-alt"></i>
        </div>
      </div>
    );
  }
}
export default SingleItem;
