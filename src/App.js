import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import UpdateEmployee from './Employee/UpdateEmployee'
import EmployeeListing from './Employee/EmployeeList'
import AddEmployee from './Employee/AddEmployee'
import UpdateProject from './Projects/UpdateProject'
import ProjectListing from './Projects/ProjectList'
import AddProject from './Projects/AddProject'
import SalesReport from  './SalesReport'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={< LoginPage />}/>
        <Route exact path='/updateEmployee/:employeeID' element={< UpdateEmployee />}/>
        <Route exact path='/employeeListing' element={< EmployeeListing />}/>
        <Route exact path='/addEmployee' element={< AddEmployee />}/>

        <Route exact path='/updateProject/:projectID' element={< UpdateProject/>}/>
        <Route exact path='/ProjectListing' element={< ProjectListing />}/>
        <Route exact path='/addProject' element={< AddProject />}/>

        <Route exact path='/salesReport' element={< SalesReport />}/>
      </Routes>
    </BrowserRouter>
  )
}
