import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { CheckboxGroup } from './components/checkbox-group/CheckboxGroup';

import { Checkbox } from './components/checkbox';
import { Radio, RadioGroup } from './components/radio-group/RadioGroup';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        maxHeight: '60%',
      }}
    >
      <RadioExample />
      <CheckboxExample />
    </SafeAreaView>
  );
}

const CheckboxExample = () => {
  const [state, setCheckbox] = React.useState([]);

  return (
    <CheckboxGroup
      label="Favorite sports"
      value={state}
      onChange={(val: any) => {
        setCheckbox(val);
      }}
    >
      <Checkbox value="soccer">
        <Text>Soccer</Text>
      </Checkbox>
      <Checkbox value="baseball">
        <Text>Baseball</Text>
      </Checkbox>
      <Checkbox value="basketball">
        <Text>Basketball</Text>
      </Checkbox>
    </CheckboxGroup>
  );
};

const RadioExample = () => {
  return (
    <RadioGroup label="Favorite pet">
      <Radio value="dogs">Dogs</Radio>
      <Radio value="cats">Cats</Radio>
    </RadioGroup>
  );
};
