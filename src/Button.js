import PropTypes from "prop-types";

function Button({ text }) {
  return <button>{text}</button>;
}

Button.ProTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
