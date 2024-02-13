import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import "../../src/styles/globals.css";
import "../../src/styles/index.css";
import "../../src/styles/loader.css";
import "../../src/styles/module/banner.module.css";
import "../../src/styles/module/common.module.css";
import "../../src/styles/module/headernotify.module.css";

const propTypes = {
  children: PropTypes.node,
  status: PropTypes.string
}

const defaultProps = {
  children: null,
  status: false
}

const FormHint = ({
  children,
  className,
  status,
  ...props
}) => {

  const classes = classNames(
    'form-hint',
    status && `text-color-${status}`,
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      {children}
    </div>
  );
}

FormHint.propTypes = propTypes;
FormHint.defaultProps = defaultProps;

export default FormHint;