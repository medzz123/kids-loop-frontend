import React, { FunctionComponent } from 'react';

import { IconProps } from './Icon.models';

const Icon: FunctionComponent<IconProps> = (props) => {
  const { name } = props;

  return <i className={`gg-${name}`} />;
};

export default Icon;
