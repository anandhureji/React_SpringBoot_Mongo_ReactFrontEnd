import React from 'react'
import  {BrowserRouter, Route, Routes,} from "react-router-dom";
import EmployeeList from './components/EmployeeList';
import NotFound from './NotFound';


function App(){
  return(
    <BrowserRouter>
    <div>
    <Routes>
    <Route exact path='/' element={<EmployeeList />}/>
    <Route path='*' element={<NotFound />} />
    </Routes>
    </div>

    </BrowserRouter>
  )
}

export default App;