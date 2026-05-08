import {createStackNavigator} from '@react-navigation/stack';

import Oassicrmmenjoiirhload from '../Oassicrmmenjoiirhcpn/Oassicrmmenjoiirhload.tsx';
import Oassicrmmenjoiirhonb from '../Oassicrmmenjoiirhscrns/Oassicrmmenjoiirhonb.tsx';
import Oassicrmmenjoiirhloc from '../Oassicrmmenjoiirhscrns/Oassicrmmenjoiirhloc.tsx';
import Oassicrmmenjoiirhstry from '../Oassicrmmenjoiirhscrns/Oassicrmmenjoiirhstry.tsx';
import Oassicrmmenjoiirtab from '../../Oassicrmmenjoiirtab.tsx';

const Stack = createStackNavigator();

const Oassicrmmenjoiirhstackk = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Oassicrmmenjoiirhload"
        component={Oassicrmmenjoiirhload}
      />
      <Stack.Screen
        name="Oassicrmmenjoiirhonb"
        component={Oassicrmmenjoiirhonb}
      />
      <Stack.Screen
        name="Oassicrmmenjoiirtab"
        component={Oassicrmmenjoiirtab}
      />
      <Stack.Screen
        name="Oassicrmmenjoiirhloc"
        component={Oassicrmmenjoiirhloc}
      />
      <Stack.Screen
        name="Oassicrmmenjoiirhstry"
        component={Oassicrmmenjoiirhstry}
      />
    </Stack.Navigator>
  );
};

export default Oassicrmmenjoiirhstackk;
