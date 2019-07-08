import React from 'react';

import PropTypes from 'prop-types';
import mystuffShape from '../../helpers/propz/mystuffShape';

import './SingleItem.scss';

class SingleItem extends React.Component {
  static propTypes = {
    thing: PropTypes.arrayOf(mystuffShape.mystuffShape),
  }

  render() {
    const { item } = this.props;
    return (
      <div className="col-6">
        <div className="SingleItem card">
          <p className="itemName">{ item.name }</p>
          <p className="itemDescription">{ item.description }</p>
          <img className="itemImg" src={ item.imageUrl } alt="a thing about an antique" />
          <p className="itemPrice" >Price: { item.price }</p>
        </div>
      </div>
    );
  }
}
export default SingleItem;
