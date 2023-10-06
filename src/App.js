import { createContext } from 'react';
import './App.css';
import Home from './Base/Home/Home';
import { useReducer } from 'react';
import { groupDetailReducer } from './AppReducer';

export const GroupDetailContext = createContext();

function App() {
  const [groupDetails, dispatch] = useReducer(groupDetailReducer, []);
  return (
    <div className="App">
      <GroupDetailContext.Provider value={{groupDetails, dispatch}}>
        <Home />
      </GroupDetailContext.Provider>
    </div>
  );
}

export default App;
