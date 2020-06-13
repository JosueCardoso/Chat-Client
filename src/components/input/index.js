import React from 'react';

import { Input } from './styles'

function input({placeholder, type}) {
  return <Input type={type} placeholder={placeholder}/>;
}

export default input;
