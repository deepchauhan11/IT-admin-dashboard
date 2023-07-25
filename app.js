const express = require("express")
const Admin = require("./admin_schema")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const Employee = require('./employee_schema');
const Project = require('./project_schema');


app.get("/",cors(),(req,res)=>{

})

app.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const data=await Admin.findOne({email:email, password:password}).exec()
        if(data){
            res.json(data)
        }
        else{
            res.json("invalid")
        }

    }
    catch(e){
        res.json("fail")
    }

})

// Create a new employee
app.post('/employee', async (req, res) => {
    const { name,title, salary } = req.body;

    const data={
      name:name,
      title:title,
      salary:salary
  }

  try{
      
        await Employee.insertMany([data])
        res.json("employee added successfully")
  }
  catch(e){
      res.json("error while adding the employee")
  }

});

// Get all employees
app.get('/employees', async (req, res) => {
    try{
        const employees=await Employee.find({})
        res.json(employees)
        
        
    }
    catch(e){
        res.json("error fetching employee list")
    }
  });


// Get the employee details with this id
app.get('/employee/:employee_id', async (req, res) => {
  try{
      const employee=await Employee.findOne({_id: req.params.employee_id}).exec()
      if(employee) {
        res.json(employee)
      } else {
        res.json("record not found")
      }
      
  }
  catch(e){
      res.json("error fetching employee list")
  }
});

 // Update employee
 app.put('/employee/:employee_id', async (req, res) => {
    try {
      const { name, title, salary} = req.body;
  
      const employee = await Employee.findByIdAndUpdate(req.params.employee_id, {
        name,
        title,
        salary,
      }, { new: true });
  
      if (!employee) {
        return res.status(404).json({ error: 'employee not found' });
      }
  
      res.json(employee);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  // Delete employee
  app.delete('/employee/:employee_id', async (req, res) => {
    try {
      const employee = await Employee.findByIdAndRemove(req.params.employee_id);
  
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
  
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });

// Create a new Project
app.post('/project', async (req, res) => {
    const { name,description, progress, amount } = req.body;

    const data={
      name:name,
      description:description,
      progress:progress,
      amount:amount
  }

  try{
      
        await Project.insertMany([data])
        res.json("project added successfully")
  }
  catch(e){
      res.json("error while adding the project")
  }

});

// Get all Projects
app.get('/project', async (req, res) => {
    try{
        const project=await Project.find({})
        res.json(project)
        
        
    }
    catch(e){
        res.json("error fetching project list")
    }
  });


// Get the Project details with this id
app.get('/project/:project_id', async (req, res) => {
  try{
      const project=await Project.findOne({_id: req.params.project_id}).exec()
      if(project) {
        res.json(project)
      } else {
        res.json("record not found")
      }
      
  }
  catch(e){
      res.json("error fetching project list")
  }
});

 // Update Project
 app.put('/project/:project_id', async (req, res) => {
    try {
      const { name, description, progress, amount} = req.body;
  
      const project = await Project.findByIdAndUpdate(req.params.project_id, {
        name,
        description,
        progress,
        amount,
      }, { new: true });
  
      if (!project) {
        return res.status(404).json({ error: 'project not found' });
      }
  
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  // Delete Project
  app.delete('/project/:project_id', async (req, res) => {
    try {
      const project = await Project.findByIdAndRemove(req.params.project_id);
  
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
  
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });

 
// Define the /sales/:viewType route
app.get('/sales/:viewType', (req, res) => {
    const viewType = req.params.viewType;
  
    // Implement the logic to fetch sales data based on the viewType
    // For simplicity, let's assume we have dummy data here.
    // Replace this with your actual logic to fetch data from the database.
    const salesData = getSalesData(viewType);
  
    res.json(salesData);
  });
  
  // Dummy sales data for demonstration
  function getSalesData(viewType) {
    if (viewType === 'month') {
      return [
        { _id: '1', month: 'January', totalSales: 1000 },
        { _id: '2', month: 'February', totalSales: 1200 },
        // Add more monthly data...
      ];
    } else if (viewType === 'year') {
      return [
        { _id: '2020', year: '2020', totalSales: 5000 },
        { _id: '2021', year: '2021', totalSales: 6000 },
        // Add more yearly data...
      ];
    } else if (viewType === 'project') {
      return [
        { projectId: 'p1', projectName: 'Project A', totalSales: 2000 },
        { projectId: 'p2', projectName: 'Project B', totalSales: 2500 },
        // Add more project data...
      ];
    } else {
      return [];
    }
  }
  
app.listen(8001,()=>{
    console.log("port connected");
})
