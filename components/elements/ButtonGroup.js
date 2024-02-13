import React from 'react';
import classNames from 'classnames';

import "../../src/styles/globals.css";
import "../../src/styles/index.css";
import "../../src/styles/loader.css";
import "../../src/styles/module/banner.module.css";
import "../../src/styles/module/common.module.css";
import "../../src/styles/module/headernotify.module.css";

const ButtonGroup = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'button-group',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    />
  );
}

export default ButtonGroup;