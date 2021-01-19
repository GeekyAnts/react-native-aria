import React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { ToggleButton } from './ToggleButton';
import { default as Button } from './SimpleButton';

// export const Example = () => {
//   return (
//     <ToggleButton onPress={() => console.log('here')}>
//       Toggle button
//     </ToggleButton>
//   );
// };
export const SimpleButton = () => {
  return <Button onPress={() => console.log('here')}>Press me</Button>;
};

storiesOf('Button', module).add('Simple Button', SimpleButton);
