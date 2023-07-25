import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  styled  from 'styled-components';
import { Link } from 'react-router-dom';



const ProjectListing = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:8001/project`)
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching project list :', error);
      });
  }, []);

  const handleDelete = (project_id) => {
    // Make an API request to delete the item with the given id
    axios
      .delete(`http://localhost:8001/project/${project_id}`)
      .then((response) => {
        // Remove the item from the employees state
        setProjects(projects.filter((item) => item._id !== project_id));
      })
      .catch((error) => {
        console.error('Error deleting project :', error);
      });
  };

  return (
    <Container>
        <div className='container'>
            <div className='add_food'>
            <Link className='btn_back' to={`/employeeListing`}>Back</Link>
              <h1 className='res_listing'>Project Listing</h1>
              <Link className='btn_add_project' to="/addProject">Add New Project</Link>
            <Link className='btn_add_sales' to={`/salesReport`}>Sales Report</Link>
            </div>
                <table className='table_det'>
                    <thead>
                    <tr className='head_det'>
                        <th className='heddeta'>Name</th>
                        <th className='heddeta'>Description</th>
                        <th className='heddeta'>Progress</th>
                        <th className="heddeta">Amount</th>
                        <th className="heddeta">Payment Received</th>
                        <th className="heddeta">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {projects.length === 0 ? (
                      <tr>
                        <td colSpan="5">No record found</td>
                      </tr>
                    ) : (
                        projects.map(project => (
                        <tr key={project._id}>
                          <td className='hed_deta'>{project.name}</td>
                          <td className='hed_deta'>{project.description}</td>
                          <td className='hed_deta'>{project.progress}%</td>
                          <td className='hed_deta'>{project.amount}</td>
                          <td className='hed_deta'>{project.amount === 0 ? "No" : "Yes"} </td>
                          <td className="hed_deta"> 
                            <button className='btn_delete' onClick={() => handleDelete(project._id)}>Delete</button>
                            <Link className='btn_update' to={`/updateProject/${project._id}`}>
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

export default ProjectListing;


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
.btn_add_project{
  display: flex;
  margin-left: 140px;
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
.btn_add_sales{
  display: flex;
  margin-left: 10px;
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
  background-color: #e08631;
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
  background-color: #0385f6;
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