import React from 'react';
import classNames from 'classnames';
import './Button.scss';

// size: large, medium, small
// color: blue, pink, gray
function Button({ children, size, color, outline, fullWidth, ...rest }) {
    return <button {...rest} className={classNames('Button', size, color, { outline, fullWidth })}>{children}</button>
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue',
}

export default Button;
