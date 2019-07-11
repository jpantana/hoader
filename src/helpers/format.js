const formatPrice = cents => (cents * 1).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

const convertPrice = dollars => (dollars * 100).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default { formatPrice, convertPrice };
