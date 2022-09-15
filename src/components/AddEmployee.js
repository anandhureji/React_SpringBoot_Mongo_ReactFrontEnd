import React, { useEffect, useState } from 'react'
import { Link, unstable_HistoryRouter, useNavigate, useParams } from 'react-router-dom';
import employeeService from '../service/employeeService';

export const AddEmployee = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [mobile,setMobile] = useState('');
    const navigate=useNavigate();
    const {id} = useParams();


    const saveEmployee = (e) =>{
        e.preventDefault();

        const employee = {firstName,lastName,mobile,id};
        if(id)
        {
            employeeService.update(employee).then(Response=>{
                console.log("Employee update successfully",Response.data);
                navigate('/');
            }).catch(Error=>{
                console.log("Spmethin went wrong",Error);
            });

        }
        else
        {
            employeeService.create(employee).then(Response=>{
                console.log("Employee added successfully",Response.data);
                navigate('/');
            
            }).catch(Error=>{
                console.log("some thing went wrong",Error);
            });
        }
        

    }

    useEffect(()=>{
        if(id)
        {
            employeeService.get(id).then(employee=>{
                setFirstName(employee.data.firstName);
                setLastName(employee.data.lastName);
                setMobile(employee.data.mobile);
            }).catch(Error=>{
                console.log("something went wrong",Error);
            });
        }
    },[])

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
    <hr />
    <Link to="/" className='btn btn-primary mb-2'>Home</Link>
    </div>
  )
}
