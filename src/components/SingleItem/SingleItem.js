import React from 'react';

import PropTypes from 'prop-types';
import mystuffShape from '../../helpers/propz/mystuffShape';

class SingleItem extends React.Component {
  static propTypes = {
    thing: PropTypes.arrayOf(mystuffShape.mystuffShape),
  }

  render() {
    const { item } = this.props;
    console.error(this.props.item);
    return (
      <div className="Singleitem">
        <p>{ item.name }</p>
        <p>{ item.description }</p>
        <p>{ item.description }</p>
        <img src={ item.imageUrl } alt="a thing about an antique" />
        <p>Price: { item.price }</p>
        <p>HIISDFSD</p>
      </div>
    );
  }
}
export default SingleItem;
