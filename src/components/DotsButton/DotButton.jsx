import React from 'react';
import PropTypes from 'prop-types';
import { Dots } from 'components/DotsButton/dotbutton-styles';

/**
 * Render Dot Button element.
 * 
 * @param {Object} props         The component props.
 * @param {func}   props.onClick handle click function.
 *  
 * @return {JSX.element}
 */

function DotButton({ onClick }) {
  return <Dots onClick={onClick} />;
}

export default DotButton;

DotButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};