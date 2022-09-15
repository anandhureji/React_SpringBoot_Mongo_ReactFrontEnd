import React from 'react'
import  {BrowserRouter, Route, Routes,} from "react-router-dom";
import EmployeeList from './components/EmployeeList';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddEmployee } from './components/AddEmployee';

function App(){
  return(
    <BrowserRouter>
    <div>
    <Routes>
    <Route exact path='/' element={<EmployeeList />}/>

    <Route path='/add' element={<AddEmployee />} />
    <Route path='*' element={<NotFound />} />
    <Route path='/employee/edit/:id' element={<AddEmployee /> } />
    </Routes>
    </div>

    </BrowserRouter>
  )
}

export default App;