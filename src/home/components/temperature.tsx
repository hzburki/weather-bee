import React from 'react';

import { Div, Text } from '../../styles/ui';

const Temperature = () => {
  return (
    <React.Fragment>
      <Div dir="row" alignItems="center" justifyContent="center">
        <Text size={120}>15</Text>
        <Text size={60} color="tertiary">
          C
        </Text>
      </Div>

      <Text color="tertiary" size={50}>
        Shower
      </Text>
    </React.Fragment>
  );
};

export default Temperature;
