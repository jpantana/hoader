import PropTypes from 'prop-types';

const mystuffShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
});


export default { mystuffShape };
