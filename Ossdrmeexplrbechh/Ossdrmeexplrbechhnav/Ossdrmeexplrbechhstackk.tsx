import {createStackNavigator} from '@react-navigation/stack';

import Ossdrmeexplrbechhload from '../Ossdrmeexplrbechhcpn/Ossdrmeexplrbechhload.tsx';
import Ossdrmeexplrbechhonb from '../Ossdrmeexplrbechhscrns/Ossdrmeexplrbechhonb.tsx';
import Ossdrmeexplrbechhloc from '../Ossdrmeexplrbechhscrns/Ossdrmeexplrbechhloc.tsx';
import Ossdrmeexplrbechhstry from '../Ossdrmeexplrbechhscrns/Ossdrmeexplrbechhstry.tsx';
import Ossdrmeexplrbechtab from '../../Ossdrmeexplrbechtab.tsx';

const Stack = createStackNavigator();

const Ossdrmeexplrbechhstackk = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Ossdrmeexplrbechhload"
        component={Ossdrmeexplrbechhload}
      />
      <Stack.Screen
        name="Ossdrmeexplrbechhonb"
        component={Ossdrmeexplrbechhonb}
      />
      <Stack.Screen
        name="Ossdrmeexplrbechtab"
        component={Ossdrmeexplrbechtab}
      />
      <Stack.Screen
        name="Ossdrmeexplrbechhloc"
        component={Ossdrmeexplrbechhloc}
      />
      <Stack.Screen
        name="Ossdrmeexplrbechhstry"
        component={Ossdrmeexplrbechhstry}
      />
    </Stack.Navigator>
  );
};

export default Ossdrmeexplrbechhstackk;
