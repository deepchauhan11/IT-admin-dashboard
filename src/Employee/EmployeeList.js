import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  styled  from 'styled-components';
import { Link } from 'react-router-dom';



const EmployeeListing = () => {
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:8001/employees`)
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employee list :', error);
      });
  }, []);

  const handleDelete = (employee_id) => {
    // Make an API request to delete the item with the given id
    axios
      .delete(`http://localhost:8001/employee/${employee_id}`)
      .then((response) => {
        // Remove the item from the employees state
        setEmployees(employees.filter((item) => item._id !== employee_id));
      })
      .catch((error) => {
        console.error('Error deleting employee :', error);
      });
  };

  return (
    <Container>
        <div className='container'>
            <div className='add_food'>
              <h1 className='res_listing'>Employee Listing</h1>
              <Link className='btn_add_employee' to="/addEmployee">Add New Employee</Link>
              <Link className='btn_add_project' to="/projectListing">Projects</Link>
            </div>
                <table className='table_det'>
                    <thead>
                    <tr className='head_det'>
                        <th className='heddeta'>Name</th>
                        <th className='heddeta'>Job Title</th>
                        <th className='heddeta'>Salary</th>
                        <th className="heddeta">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.length === 0 ? (
                      <tr>
                        <td colSpan="4">No record found</td>
                      </tr>
                    ) : (
                    employees.map(employee => (
                        <tr key={employee._id}>
                          <td className='hed_deta'>{employee.name}</td>
                          <td className='hed_deta'>{employee.title}</td>
                          <td className='hed_deta'>{employee.salary}</td>
                          <td className="hed_deta"> 
                            <button className='btn_delete' onClick={() => handleDelete(employee._id)}>Delete</button>
                            <Link className='btn_update' to={`/updateEmployee/${employee._id}`}>
                              Update
                            </Link>
                          </td>
                        </tr>
                    )))}
                    </tbody>
                </table>
        </div>
    </Container>
  );
};

export default EmployeeListing;


const Container = styled.div`
.container {
  width:100vw;
  height:110vh;
  background-color: #ffe6cc;
}
  .add_food{
    display: flex;
    align-items: center;
    justify-content: center;
  }
.res_listing{
    display: flex;
    margin-left: 380px;
    font-size: 3rem;
    font-weight: bold;
    color: #990000;
    align-items: center;
    justify-content: center;
}
.btn_add_employee{
  display: flex;
  margin-left: 120px;
  width: 150px;
  height: 35px;
  text-decoration: none;
  cursor: pointer;
  float: right;
  font-weight: bold;
  border: 1px solid black;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  background-color: #80ff80;
  color: black;
}
.btn_add_project{
  display: flex;
  margin-left: 10px;
  width: 130px;
  height: 35px;
  text-decoration: none;
  cursor: pointer;
  float: right;
  font-weight: bold;
  border: 1px solid black;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  background-color: #c932c9;
  color: black;
}
.btn_back{
  display: flex;
  width: 70px;
  height: 35px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid black;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  background-color: #33adff;
  color: black;
}
.table_det{
    width: 1000px;
    font-size: 1.5rem;
    margin-top: 25px;
    
    margin-left: 190px;
    border: 1px solid grey;
    text-align: center;
    justify-content: center;
}
.head_det{
    background-color: lightgrey;;
}
.hed_deta{
    border: 1px solid black;
}
.btn_delete{
  width: 70px;
  height: 30px;
  margin: 5px;
  font-weight: bold;
  border-radius: 5px;
  align-items: center;
  font-size: 1rem;
  border: 1px solid black;
  background-color: red;
  color: black;
  cursor: pointer;
}
.btn_update{
  width: 80px;
  height: 40px;
  margin: 5px;
  padding: 3px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  align-items: center;
  font-size: 1rem;
  border: 1px solid black;
  background-color: #64b2d9;
  color: black;
  cursor: pointer;
}
.heddeta{
  border: 1px solid black;
  background-color: lightgrey;;
}
.hed_deta{
  border: 1px solid black;
  background-color: #e6ffff;
}
`;