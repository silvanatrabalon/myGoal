//we are using the mongoose models for get the Task schema/document from MongoDB
import Task from '../../models/Task'

const Query = {
  greet(){
    return 'Hello Word'
  },
  
  //this a async request becouse we need to await when this finish to find in all the DB
  task: async () => {
    return await Task.find()
  }
}

export default Query;