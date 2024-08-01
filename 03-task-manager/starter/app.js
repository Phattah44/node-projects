const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
  res.send('Task Manager');
});

app.use('/api/v1/tasks', tasks);

//app.get('api/v1/tasks')       -get all tasks
//app.post('api/v1/tasks')      -create a new tasks
//app.get('api/v1/tasks/:id')   -get a single tasks
//app.patch('api/v1/tasks/:id')  -update task
//app.delete('api/v1/tasks/:id') -get all tasks

const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}....`));
