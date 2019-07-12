import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import mystuffShape from '../../helpers/propz/mystuffShape';

import './SingleItem.scss';

class SingleItem extends React.Component {
  static propTypes = {
    thing: PropTypes.arrayOf(mystuffShape.mystuffShape),
    deleteItem: PropTypes.func.isRequired,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { item, deleteItem } = this.props;
    deleteItem(item.id);
  };

  render() {
    const { item } = this.props;
    const editLink = `/edit/${item.id}`;
    return (
      <div className="col-6">
        <div className="SingleItem card justify-content-center">
          <p className="itemName">{ item.name }</p>
          <p className="itemDescription">{ item.description }</p>
          <img className="itemImg" src={ item.imageUrl } alt="a thing about an antique" />
          <p className="itemPrice" >Price: {item.price}</p>
          <div className="row editDeleteDiv">
            <Link to={editLink}><i className="far fa-edit"></i></Link>
            <i onClick={ this.deleteEvent } className="far fa-trash-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleItem;
