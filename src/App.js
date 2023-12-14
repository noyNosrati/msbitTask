import { useState } from 'react';
import './App.css';
import AppRoutes from './appRoutes';
import { MyContext } from './context/myContext';

function App() {
  const [emailLen, setEmailLen] = useState(localStorage["emailLen"]? localStorage.getItem("emailLen"):0);
  const [colLen, setColLen] = useState(localStorage["colLen"]? localStorage.getItem("colLen"):0);
  const [rowLen, setRowLen] = useState(localStorage["rowLen"]? localStorage.getItem("rowLen"):0);
  const [pacAn, setPacAn] = useState(localStorage["pacAn"]? localStorage.getItem("pacAn"):0);
  return (
    <MyContext.Provider value={{
      emailLen,setEmailLen,colLen,setColLen,rowLen,setRowLen,pacAn,setPacAn
    }}>
      <AppRoutes />
    </MyContext.Provider>
  );
}

export default App;
