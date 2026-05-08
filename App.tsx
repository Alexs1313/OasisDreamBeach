import {NavigationContainer} from '@react-navigation/native';

import Oassicrmmenjoiirhstackk from './Oassicrmmenjoiirh/Oassicrmmenjoiirhnav/Oassicrmmenjoiirhstackk.tsx';
import {OassicrmmenjoiirhSavedProvider} from './Oassicrmmenjoiirh/Oassicrmmenjoiirhstore/Oassicrmmenjoiirhsaved';

const App = () => {
  return (
    <NavigationContainer>
      <OassicrmmenjoiirhSavedProvider>
        <Oassicrmmenjoiirhstackk />
      </OassicrmmenjoiirhSavedProvider>
    </NavigationContainer>
  );
};

export default App;
