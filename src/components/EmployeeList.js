import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import employeeService from '../service/employeeService';



export default function EmployeeList() {
    const [employees,setEmployees]=useState([]);
   
    useEffect(()=>{
     employeeService.getAll().then(Response=>{
       console.log("Printing employees data",Response.data);
       setEmployees(Response.data);
     })
     .catch(Error=>{
       console.log("something went wrong",Error);
     })
    },[])
   
     return (
       <div className='container'>
       
       <h1>List of employees</h1>
       <Link to="/add" className='btn btn-primary mb-2'>Add employee</Link>
       <div>
       <table className='table table-bordered table-striped'>
       <thead className='thead-dark'>
       <tr>
       
       <th>FirstName</th>
       <th>LastName</th>
       <th>Phone</th>
       <th>Actions</th>
       </tr>
       </thead>
       <tbody>
       {
         employees.map(employee=>(
           <tr key={employee.id}>
           <td>{employee.firstName}</td>
           <td>{employee.lastName}</td>
           <td>{employee.mobile}</td>
           <td>
           <Link to={`/employee/edit/${employee.id}`} className="btn btn-success">update</Link>
           </td>
           </tr>
         ))
   
       }
       </tbody>
       </table>
       </div>
   
       </div>
     )
   }