import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { CheckboxGroup } from './components/checkbox-group/CheckboxGroup';

import { Checkbox } from './components/checkbox';

export default function App() {
  const [state, setCheckbox] = React.useState(['soccer']);
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}
