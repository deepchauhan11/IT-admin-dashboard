import React, { useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import  styled  from 'styled-components';

const AddProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [progress, setProgress] = useState('');
  const [amount, setAmount] = useState('');

  const history=useNavigate();


  const createProject = (event) => {
    event.preventDefault();


    // Make an API request to update the food item
    axios
      .post(`http://localhost:8001/project`,  {
        name,
        description,
        progress,
        amount,
      })
      .then((response) => {
        history(`/projectListing`)
      })
      .catch((error) => {
        // Handle the error, e.g., show an error message
        console.error('Error adding project :', error);
      });
  };

  return (
    <Container>
      <div>
      <Link className='btn_back' to={`/projectListing`}>Back</Link>
        <h1 className='food_items'>Add New Project</h1>
          <form onSubmit={createProject} className='table_det'>
            <div className='form_container'>
            <label>
              Name:
              <input className='inp_det_1' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
            Description:
              <input className='inp_det_2' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br />
            <label>
            Progress:
              <input className='inp_det_3' type="number" value={progress} onChange={(e) => setProgress(e.target.value)} />
            </label>
            <br />
            <label>
            Amount:
              <input className='inp_det_3' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </label>
            <br />
            {/* <input className='inp_det_4' type="hidden" value={restaurantId} /> */}
           <button className='btn' type="submit">Add</button>
            </div>
          </form>
      </div>
    </Container>
  );
};

export default AddProject;


const Container = styled.div`
body {
  background-color: #fafafa;
}
.food_items{
  display: flex;
  margin: 15px;
  font-size: 3rem;
  font-weight: bold;
  color: #990000;
  justify-content: center;
}
.form_container{
  margin-top: 15px;
  text-align: center;
  justify-content: center;
}
.btn_back{
  display: flex;
  width: 70px;
  height: 35px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-left: 70px;
  margin-top: 10px;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid black;
  align-items: center;
  border-radius: 7px;
  justify-content: center;
  background-color: #33adff;
  color: black;
}
.table_det{
  width: 470px;
  height: 280px;
  font-size: 1.5rem;
  margin-top: 30px;
  margin-left: 440px;
  border: 1px solid grey;
  text-align: center;
  
  background-color: #e6ffff;
  justify-content: center;
}

.inp_det_1{
  width: 250px;
  margin-left: 87px;
  padding: 5px;
}
.inp_det_2{
  width: 250px;
  margin-left: 31px;
  padding: 5px;
}
.inp_det_3{
  width: 250px;
  margin-left: 101px;
  padding: 5px;
}
.inp_det_4{
  width: 250px;
  margin-left: 9px;
  padding: 5px;
}
.inp_det_5{
  width: 250px;
  margin-left: 60px;
  padding: 5px;
}
.btn{
  width: 250px;
  font-weight: bold;
  margin-left : 5px;
  cursor: pointer;
  margin-top : 25px;
  background-color: #99e699;
  padding: 5px;
}
`;