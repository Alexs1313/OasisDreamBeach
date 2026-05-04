import {NavigationContainer} from '@react-navigation/native';

import Ockeanguudexplrrhstackk from './Ockeanguudexplrrh/Ockeanguudexplrrhnav/Ockeanguudexplrrhstackk.tsx';
import {OckeanguudexplrrhSavedProvider} from './Ockeanguudexplrrh/Ockeanguudexplrrhstore/Ockeanguudexplrrhsaved';

const App = () => {
  return (
    <NavigationContainer>
      <OckeanguudexplrrhSavedProvider>
        <Ockeanguudexplrrhstackk />
      </OckeanguudexplrrhSavedProvider>
    </NavigationContainer>
  );
};

export default App;
