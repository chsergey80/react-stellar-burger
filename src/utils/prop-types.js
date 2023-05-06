import PropTypes from "prop-types";

export const ingredientPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});