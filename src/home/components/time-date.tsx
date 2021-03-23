import React from 'react';

import { Div, Text } from '../../styles/ui';

const TimeAndDate = () => {
  return (
    <Div flex={1} dir="row" alignItems="center" pB={10}>
      <Text color="secondary" size={15} mR={30}>
        Today
      </Text>
      <Text color="secondary" size={15} mL={30}>
        Fri, 5 Jan
      </Text>
    </Div>
  );
};

export default TimeAndDate;
