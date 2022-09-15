import React, { useState } from 'react'
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import employeeService from '../service/employeeService';

export const AddEmployee = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [mobile,setMobile] = useState('');
    const navigate=useNavigate();


    const saveEmployee = (e) =>{
        e.preventDefault();

        const employee = {firstName,lastName,mobile};
        employeeService.create(employee).then(Response=>{
            console.log("Employee added successfully",Response.data);
            navigate('/');
        
        }).catch(Error=>{
            console.log("some thing went wrong",Error);
        })

    }

  return (
    <div className='container'>
    <h1>Add Employee</h1>
    <hr />
    <form>
    <div className='form-group'>
    <input type="text" className='form-control col-4' id='firstname' value={firstName} 
    onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter FirstName"
    />
    <br />
    <input type="text" className='form-control col-4' id='lastName' value={lastName} 
    onChange={(e)=>setLastName(e.target.value)}
    placeholder="Enter LastName"
    />
    <br />
    <input type="text" className='form-control col-4' id='mobile' value={mobile} 
    onChange={(e)=>setMobile(e.target.value)}
    placeholder="Enter mobile number"
    />
    <br />
    </div>
    <div>
    <button className='btn btn-primary' onClick={(e)=>saveEmployee(e)}>Save</button>
    </div>
    </form>
    </div>
  )
}
