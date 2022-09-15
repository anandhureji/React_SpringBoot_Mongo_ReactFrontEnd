import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import employeeService from '../service/employeeService';



export default function EmployeeList() {
    const [employees,setEmployees]=useState([]);

    const init =()=>{
        employeeService.getAll().then(Response=>{
            console.log("Printing employees data",Response.data);
            setEmployees(Response.data);
          })
          .catch(Error=>{
            console.log("something went wrong",Error);
          })
    }
   
    useEffect(()=>{
     init();
    },[])

    const handleDelete = (id) =>{
        employeeService.remove(id).then(Response=>{
            console.log("Employee deleted successfully",Response.data);
            init();
        }).catch(Error=>{
            console.log("Something went wrong",Error);
        })
    }
   
     return (
       <div className='container'>
       
       <h1>List of employees</h1>
       <Link to="/add" className='btn btn-primary mb-2'>Add employee</Link>
       <div>
       <table className='table table-bordered table-striped'>
       <thead className='bg-info'>
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
           <button className="btn btn-danger" onClick={()=>{handleDelete(employee.id);}}>delete</button>
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