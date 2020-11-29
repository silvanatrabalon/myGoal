import Task from '../../models/Task'


const Mutation = {
  //the params are the fields of the Task schema
  createTask: async (_, {title, content, author}) => { //ignore fuction and parents with _
    const newTask = new Task({title, content, author});
    return await newTask.save() //all the operations on bd are async, the return is the new task
  },
  removeTask: async (_,  {_id}) => { //ignore parent with _
    return await Task.findByIdAndDelete(_id)  //delete from mongo db
  }
};

export default Mutation;