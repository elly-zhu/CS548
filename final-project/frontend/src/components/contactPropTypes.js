import PropTypes from "prop-types";

const contactPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  landline: PropTypes.string,
  address: PropTypes.string,
  note: PropTypes.string,
}).isRequired;

export default contactPropTypes;
