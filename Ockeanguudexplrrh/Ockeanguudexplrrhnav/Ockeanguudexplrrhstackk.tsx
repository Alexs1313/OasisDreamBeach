import {createStackNavigator} from '@react-navigation/stack';

import Ockeanguudexplrrhload from '../Ockeanguudexplrrhcpn/Ockeanguudexplrrhload.tsx';
import Ockeanguudexplrrhonb from '../Ockeanguudexplrrhscrns/Ockeanguudexplrrhonb.tsx';
import Ockeanguudexplrrhloc from '../Ockeanguudexplrrhscrns/Ockeanguudexplrrhloc.tsx';
import Ockeanguudexplrrhstry from '../Ockeanguudexplrrhscrns/Ockeanguudexplrrhstry.tsx';
import Ockeanguudexplrrtab from '../../Ockeanguudexplrrtab.tsx';

const Stack = createStackNavigator();

const Ockeanguudexplrrhstackk = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Ockeanguudexplrrhload"
        component={Ockeanguudexplrrhload}
      />
      <Stack.Screen
        name="Ockeanguudexplrrhonb"
        component={Ockeanguudexplrrhonb}
      />
      <Stack.Screen
        name="Ockeanguudexplrrtab"
        component={Ockeanguudexplrrtab}
      />
      <Stack.Screen
        name="Ockeanguudexplrrhloc"
        component={Ockeanguudexplrrhloc}
      />
      <Stack.Screen
        name="Ockeanguudexplrrhstry"
        component={Ockeanguudexplrrhstry}
      />
    </Stack.Navigator>
  );
};

export default Ockeanguudexplrrhstackk;
