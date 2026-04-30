import {NavigationContainer} from '@react-navigation/native';

import Ossdrmeexplrbechhstackk from './Ossdrmeexplrbechh/Ossdrmeexplrbechhnav/Ossdrmeexplrbechhstackk.tsx';
import {OssdrmeexplrbechhSavedProvider} from './Ossdrmeexplrbechh/Ossdrmeexplrbechhstore/Ossdrmeexplrbechhsaved';

const App = () => {
  return (
    <NavigationContainer>
      <OssdrmeexplrbechhSavedProvider>
        <Ossdrmeexplrbechhstackk />
      </OssdrmeexplrbechhSavedProvider>
    </NavigationContainer>
  );
};

export default App;
