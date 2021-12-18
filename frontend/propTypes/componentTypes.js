import PropTypes from 'prop-types';

export const dataShape = PropTypes.shape({
  header: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
  image: PropTypes.object,
}).isRequired;

export const childrenShape = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.node]);
