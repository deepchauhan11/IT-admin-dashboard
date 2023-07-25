import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  styled  from 'styled-components';
import { Link } from 'react-router-dom';


const SalesReport = () => {
  const [sales, setSales] = useState([]);
  const [viewType, setViewType] = useState('month'); // Default view type is month-wise

  useEffect(() => {
    axios.get(`http://localhost:8001/sales/${viewType}`)
      .then(response => {
        setSales(response.data);
      })
      .catch(error => {
        console.error('Error fetching project list :', error);
      });
  }, [viewType]);

  const handleViewTypeChange = (e) => {
    setViewType(e.target.value);
  };

  return (
      <Container>
    <div className='container'>
    <Link className='btn_back' to={`/projectListing`}>Back</Link>
      <h2 className='heading_sales'>Sales Report</h2>
      <div className='view_details'>
        <label>
          View by:
          <select className='inp_viewtype' value={viewType} onChange={handleViewTypeChange}>
            <option value="month">Month-wise</option>
            <option value="year">Annually</option>
            <option value="project">Per Project</option>
          </select>
        </label>
      </div>
      {viewType === 'project' ? (
        <div>
          {/* Render sales data per project */}
          <h3 className='viewtype_sales'>Sales per Project</h3>
          <table className='total_sales'>
            <thead>
              <tr>
                <th className='details'>Project Name</th>
                <th className='details'>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((projectSales) => (
                <tr key={projectSales.projectId}>
                  <td className='details'>{projectSales.projectName}</td>
                  <td className='details'>{projectSales.totalSales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          {/* Render sales data month-wise or annually */}
          <h3 className='viewtype_sales'>{viewType === 'month' ? 'Month-wise' : 'Annually'} Sales</h3>
          <table className='total_sales'>
            <thead>
              <tr>
                <th className='details'>{viewType === 'month' ? 'Month' : 'Year'}</th>
                <th className='details'>Total Sales</th>
              </tr>
            </thead>
            <tbody>
            {sales.length === 0 ? (
                      <tr>
                        <td className='details' colSpan="5">No record found</td>
                      </tr>
                    ) : (
              sales.map((sale) => (
                <tr key={sale._id}>
                  <td className='details'>{viewType === 'month' ? sale.month : sale.year}</td>
                  <td className='details'>{sale.totalSales}</td>
                </tr>
              )))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </Container>
  );
};

export default SalesReport;

const Container = styled.div`
.container {
  width:100vw;
  height:100vh;
  background-color: #ffe6cc;
}
.btn_back{
  display: flex;
  width: 70px;
  height: 35px;
  margin-left: 30px;
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
.heading_sales{
  display: flex;
    font-size: 3rem;
    margin-top: 0;
    font-weight: bold;
    color: #990000;
    align-items: center;
    justify-content: center;
}
.view_details{
  display: flex;
    font-size: 1.2rem;
    margin-top: 0;
    font-weight: bold;
    color: #21579e;
    align-items: center;
    justify-content: center;
}
.inp_viewtype{
  width: 106px;
  margin-left: 10px;
}
.viewtype_sales{
  display: flex;
    font-size: 2rem;
    margin-top: 20px;
    font-weight: bold;
    color: #e65517;
    align-items: center;
    justify-content: center;
}
.total_sales{
  width: 1000px;
    font-size: 1.5rem;
    margin-top: 25px;
    margin-left: 190px;
    border: 1px solid grey;
    text-align: center;
    justify-content: center;
}
.details{
  border: 1px solid grey;
}
`;