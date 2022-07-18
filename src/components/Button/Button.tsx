import React from 'react';
import './button.css';

interface IButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Extra Button styles
   */
  style?: object;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  disabled = false,
  size = 'medium',
  backgroundColor,
  label,
  style = {},
  ...props
}: IButtonProps) => {
  const mode = disabled ? 'storybook-button--disabled' : primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      disabled={disabled}
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ ...style, backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
